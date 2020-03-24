import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { MdCancel } from 'react-icons/md';
import './styles.css';
import { useDispatch } from 'react-redux';
import {
  removeVideoFromList,
  updateVideoFormat
} from '../../store/videos/actions';
import FormatsOptions from '../FormatsOptions';
import electron from '../../electron';

export default function VideosListItem(props) {
  const { name, size, id, outputFormat, progress, status, outputDir } = props;

  const dispatch = useDispatch();

  function handleRemoveVideo() {
    dispatch(removeVideoFromList(id));
  }

  function handleChangeFormat(format) {
    dispatch(updateVideoFormat(id, format));
  }

  function handleOpenInFolder() {
    electron.shell.openItem(outputDir);
  }

  let videoItemRight = '';

  if (status !== 'converting') {
    videoItemRight = (
      <>
        {status === 'finished' && outputDir ? (
          <Button onClick={handleOpenInFolder} size="sm">
            Open in folder
          </Button>
        ) : (
          ''
        )}

        <DropdownButton
          className="VideosListItem__format"
          size="sm"
          title={`Convert to: ${outputFormat}`}
          alignRight
          variant="secondary"
        >
          <FormatsOptions handleClick={handleChangeFormat} />
        </DropdownButton>

        <button onClick={handleRemoveVideo} className="VideosListItem__remove">
          <MdCancel />
        </button>
      </>
    );
  }

  return (
    <div>
      <div className="VideosListItem">
        <div className="VideosListItem__left">
          <div className="VideosListItem__name">{name}</div>
          <div className="VideosListItem__size">{size}</div>
        </div>

        <div className="VideosListItem__right">{videoItemRight}</div>
      </div>

      {status === 'converting' ? (
        <ProgressBar className="VideosListItem__progress" now={progress} />
      ) : (
        ''
      )}
    </div>
  );
}
