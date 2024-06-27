import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Subtext } from "components/ui/Typography";
import { Line, Table, TableHead, TableHeading } from "./styled";
import Skeleton from "react-loading-skeleton";
import TrackRow from "./TrackRow";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/playerReducer";
import { useWindowSize } from "hooks/useWindowSize";
import { breakPoints } from "styles/BreakPoints";

function TracksTable({ tracks, loading }) {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying, savedTracksIds } = useContext(PlayerContext);
  const { width } = useWindowSize();

  function addToFavorites(trackId) {
    dispatch({
      type: actions.TOGGLE_SAVE_TRACK,
      trackId,
    });
  }

  function handleTrackClick(clickedTrack) {
    if (track?.id === clickedTrack.id) {
      dispatch({
        type: actions.TOGGLE_PLAY,
      });
    } else {
      dispatch({
        type: actions.SET_TRACKS_DATA,
        track: clickedTrack,
        tracks: tracks,
        isPlaying: true,
      });
    }
  }

  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading first={1}>
            {loading ? <Skeleton widht={20} height={20} /> : <Subtext>#</Subtext>}
          </TableHeading>
          <TableHeading>
            {loading ? <Skeleton widht={20} height={20} /> : <Subtext>Song name</Subtext>}
          </TableHeading>
          {width > breakPoints.md && (
            <TableHeading>
              {loading ? <Skeleton widht={20} height={20} /> : <Subtext>Time</Subtext>}
            </TableHeading>
          )}
          {width > breakPoints.md && (
            <TableHeading>
              {loading ? <Skeleton widht={20} height={20} /> : <Subtext>Album name</Subtext>}
            </TableHeading>
          )}
          <TableHeading>
            {loading ? <Skeleton widht={20} height={20} /> : <Subtext>Action</Subtext>}
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {!loading &&
          tracks?.map((currentTrack, index) => (
            <TrackRow
              isPlaying={currentTrack?.id === track?.id && isPlaying}
              onClick={handleTrackClick}
              index={index}
              key={currentTrack.id}
              track={currentTrack}
              addToFavorites={addToFavorites}
              isSaved={savedTracksIds.includes(currentTrack.id)}
            />
          ))}

        {loading && [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => <TrackRow key={num} index={num} />)}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  ),
  loading: PropTypes.bool,
};

export default TracksTable;
