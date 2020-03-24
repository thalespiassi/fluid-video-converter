import {
  SET_VIDEOS,
  REMOVE_VIDEO,
  ADD_VIDEOS,
  UPDATE_VIDEO_FORMAT,
  UPDATE_ALL_VIDEOS_FORMAT,
  UPDATE_VIDEO_PROGRESS,
  UPDATE_VIDEO_STATUS,
  UPDATE_ALL_VIDEOS_STATUS,
  UPDATE_VIDEO_OUTPUT_DIR
} from './types';

export const setVideosList = videosList => async dispatch => {
  dispatch({
    type: SET_VIDEOS,
    videosList
  });
};

export const removeVideoFromList = id => async dispatch => {
  dispatch({
    type: REMOVE_VIDEO,
    id
  });
};

export const addVideosToList = newVideos => async dispatch => {
  dispatch({
    type: ADD_VIDEOS,
    newVideos
  });
};

export const updateAllVideosFormat = outputFormat => async dispatch => {
  dispatch({
    type: UPDATE_ALL_VIDEOS_FORMAT,
    outputFormat
  });
};

export const updateVideoFormat = (id, outputFormat) => async dispatch => {
  dispatch({
    type: UPDATE_VIDEO_FORMAT,
    id,
    outputFormat
  });
};

export const updateVideoProgress = (id, progress) => async dispatch => {
  dispatch({
    type: UPDATE_VIDEO_PROGRESS,
    id,
    progress
  });
};

export const updateVideoStatus = (id, status) => async dispatch => {
  dispatch({
    type: UPDATE_VIDEO_STATUS,
    id,
    status
  });
};

export const updateAllVideosStatus = status => async dispatch => {
  dispatch({
    type: UPDATE_ALL_VIDEOS_STATUS,
    status
  });
};

export const updateVideoOutputDir = (id, outputDir) => async dispatch => {
  dispatch({
    type: UPDATE_VIDEO_OUTPUT_DIR,
    id,
    outputDir
  });
};
