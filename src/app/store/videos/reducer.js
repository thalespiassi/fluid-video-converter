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
import defaultState from './state';

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return {
        ...state,
        list: action.videosList
      };

    case REMOVE_VIDEO:
      return {
        ...state,
        list: state.list.filter(video => video.id !== action.id)
      };

    case ADD_VIDEOS:
      const filteredVideos = action.newVideos.filter(
        video => !state.list.find(stateVideo => stateVideo.path === video.path)
      );

      return {
        ...state,
        list: [...state.list, ...filteredVideos]
      };

    case UPDATE_VIDEO_FORMAT:
      return {
        ...state,
        list: state.list.map(video => {
          if (video.id === action.id) {
            video.outputFormat = action.outputFormat;
          }

          return video;
        })
      };

    case UPDATE_ALL_VIDEOS_FORMAT:
      return {
        ...state,
        list: state.list.map(video => {
          video.outputFormat = action.outputFormat;
          return video;
        })
      };

    case UPDATE_VIDEO_PROGRESS:
      return {
        ...state,
        list: state.list.map(video => {
          if (video.id === action.id) {
            video.progress = action.progress;
          }

          return video;
        })
      };

    case UPDATE_VIDEO_STATUS:
      return {
        ...state,
        list: state.list.map(video => {
          if (video.id === action.id) {
            video.status = action.status;
          }

          return video;
        })
      };

    case UPDATE_ALL_VIDEOS_STATUS:
      return {
        ...state,
        list: state.list.map(video => {
          video.status = action.status;
          return video;
        })
      };

    case UPDATE_VIDEO_OUTPUT_DIR:
      return {
        ...state,
        list: state.list.map(video => {
          if (video.id === action.id) {
            video.outputDir = action.outputDir;
          }

          return video;
        })
      };

    default:
      return state;
  }
};
