import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { addVideosToList } from '../../store/videos/actions';
import parseVideoItem from '../../utils/parseVideoItem';
import './styles.css';

export default function VideoUpload() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.list);

  async function handleDrop(files) {
    try {
      const newVideos = files.map(parseVideoItem);
      dispatch(addVideosToList(newVideos));
    } catch ({ message }) {
      setError(<Alert variant="danger">{message}</Alert>);
      setLoading(false);
    }
  }

  if (videos.some(video => video.status === 'converting')) {
    return '';
  }

  return (
    <div className="VideoUpload">
      {error}

      <div
        className={`VideoUpload__dropzone ${videos.length &&
          'VideoUpload__dropzone--has-videos'}`}
      >
        <Dropzone onDrop={handleDrop} accept="video/*" disabled={loading}>
          {({ getRootProps, getInputProps }) => (
            <section className={loading ? 'loading' : ''}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {loading ? (
                  <>
                    <Spinner as="span" animation="grow" role="status"></Spinner>
                    <p>Processing</p>
                  </>
                ) : (
                  <p>Drag and drop, or click to select file to convert.</p>
                )}
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
}
