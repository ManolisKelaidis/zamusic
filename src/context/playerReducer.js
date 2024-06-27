import { getStorageValue } from "services/localStorage";

export const actions = {
  SET_TRACKS_DATA: "SET_TRACKS_DATA",
  TOGGLE_PLAY: "TOGGLE_PLAY",
  TOGGLE_NEXT: "TOGGLE_NEXT",
  TOGGLE_PREV: "TOGGLE_PREV",
  TOGGLE_SAVE_TRACK: "TOGGLE_SAVE_TRACK",
};

export const initialState = {
  track: null,
  tracks: [],
  isPlaying: false,
  savedTracksIds: getStorageValue("savedTracksIds") || [],
};

export function playerReducer(state, action) {
  switch (action.type) {
    case actions.SET_TRACKS_DATA:
      return {
        ...state,
        track: action.track,
        tracks: action.tracks,
        isPlaying: action.isPlaying,
      };

    case actions.TOGGLE_SAVE_TRACK:
      const indexOfTrack = state.savedTracksIds.indexOf(action.trackId);
      let newSavedTrackId;
      if (indexOfTrack >= 0) {
        newSavedTrackId = state.savedTracksIds.filter((id) => id !== action.trackId);
      } else {
        newSavedTrackId = [...state.savedTracksIds, action.trackId];
      }
      return {
        ...state,
        savedTracksIds: newSavedTrackId,
      };
    case actions.TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };

    case actions.TOGGLE_NEXT: {
      if (!state.track || !state.track) return;
      const currentSongIndex = state.tracks.findIndex((track) => track.id === state.track.id);
      const nextSongIndex = currentSongIndex === state.tracks.length - 1 ? 0 : currentSongIndex + 1;
      return {
        ...state,
        track: state.tracks[nextSongIndex],
      };
    }
    case actions.TOGGLE_PREV: {
      if (!state.track || !state.track) return;
      const currentSongIndex = state.tracks.findIndex((track) => track.id === state.track.id);
      const nextSongIndex = currentSongIndex === 0 ? state.tracks.length - 1 : currentSongIndex - 1;
      return {
        ...state,
        track: state.tracks[nextSongIndex],
      };
    }

    default:
      return state;
  }
}
