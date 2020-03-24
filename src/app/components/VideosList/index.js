import React from 'react';
import { useSelector } from 'react-redux';
import VideosListItem from '../VideosListItem';
import VideosListToolbar from '../VideosListToolbar';

import './styles.css';
import StartConversionButton from '../StartConversionButton';

export default function VideosList() {
  const list = useSelector(state => state.videos.list);

  if (!list.length) {
    return '';
  }

  return (
    <>
      <VideosListToolbar />
      <div className="VideosList">
        {list.map(video => (
          <VideosListItem key={video.id} {...video} />
        ))}
      </div>
      <StartConversionButton />
    </>
  );
}
