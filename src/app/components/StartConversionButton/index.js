import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import electron from '../../electron';
import { updateAllVideosStatus } from '../../store/videos/actions';

export default function StartConversionButton() {
  const videos = useSelector(state => state.videos.list);
  const dispatch = useDispatch();

  function handleConversionStart() {
    dispatch(updateAllVideosStatus('converting'));
    electron.event.send('conversion:start', videos);
  }

  if (videos.some(video => video.status === 'converting')) {
    return (
      <div className="StartConversionButton">
        <Button
          disabled
          variant="success"
          className="StartConversionButton__trigger"
        >
          Converting
          <Spinner animation="border" role="status" size="sm">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Button>
      </div>
    );
  }

  return (
    <div className="StartConversionButton">
      <Button
        onClick={handleConversionStart}
        variant="success"
        className="StartConversionButton__trigger"
      >
        Start Conversion
      </Button>
    </div>
  );
}
