import React from 'react';
import electron from '../../electron';
import {
  updateVideoProgress,
  updateVideoStatus,
  updateVideoOutputDir,
  updateAllVideosStatus
} from '../../store/videos/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function ElectronEvents() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  electron.event.on('conversion:progress', (_, { id, percent }) => {
    dispatch(updateVideoProgress(id, percent));
  });

  electron.event.on('conversion:end', (_, { id, outputDir }) => {
    dispatch(updateVideoProgress(id, 0));
    dispatch(updateVideoStatus(id, 'finished'));
    dispatch(updateVideoOutputDir(id, outputDir));
  });

  electron.event.on('error', (_, error) => {
    dispatch(updateAllVideosStatus('awaiting'));
    setErrors([...errors, error]);
  });

  return (
    <div>
      {errors.map((error, index) => (
        <Alert key={index} variant="danger">
          {error}
        </Alert>
      ))}
    </div>
  );
}
