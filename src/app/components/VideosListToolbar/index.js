import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './styles.css';
import FormatsOptions from '../FormatsOptions';
import { useDispatch, useSelector } from 'react-redux';
import { updateAllVideosFormat } from '../../store/videos/actions';

export default function VideosListToolbar() {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.list);

  function handleChangeFormat(format) {
    dispatch(updateAllVideosFormat(format));
  }

  if (videos.some(video => video.status === 'converting')) {
    return '';
  }

  return (
    <div className="VideosListToolbar">
      <DropdownButton
        alignRight
        className="VideosListToolbar__fomart"
        size="sm"
        title="Convert all to"
      >
        <FormatsOptions handleClick={handleChangeFormat} />
      </DropdownButton>
    </div>
  );
}
