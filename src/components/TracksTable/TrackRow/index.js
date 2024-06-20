import React from "react";
import PropTypes from "prop-types";
import {
  ActionWrapper,
  DurationTableData,
  FirstTableData,
  IconWrapper,
  SkeletonImageWrapper,
  SongNumberText,
  StyledTrackRow,
  TableData,
  TableDataTrackInfo,
  TrackInfoImage,
  TrackInfoWrapper,
  TrackSubTitle,
  TrackTitle,
} from "./styled";
import IconButton from "components/ui/IconButton";
import { Heart, Pause, Play } from "components/ui/Icons";
import Skeleton from "react-loading-skeleton";
import { setStorageValue } from "services/localStorage";
import { theme } from "styles/Theme";
import { useWindowSize } from "hooks/useWindowSize";
import { breakPoints } from "styles/BreakPoints";

const TrackRow = ({ track, index, onClick, isPlaying, addToFavorites, isSaved }) => {
  const { width } = useWindowSize();
  function secondsToMinutes(seconds) {
    if (seconds) return (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + seconds;
    return null;
  }

  return (
    <StyledTrackRow onClick={() => onClick(track)} key={track?.id}>
      <FirstTableData>
        <SongNumberText className="text">
          {track ? String(index + 1).padStart(2, "0") : <Skeleton width={30} />}
        </SongNumberText>
        <IconWrapper className="icon">
          {isPlaying ? <Pause width={25} height={25} /> : <Play width={25} height={25} />}
        </IconWrapper>
      </FirstTableData>
      <TableDataTrackInfo>
        {track ? (
          <TrackInfoImage src={track?.album?.cover} />
        ) : (
          <Skeleton
            width={width > breakPoints.md ? 65 : 45}
            height={width > breakPoints.md ? 65 : 45}
            borderRadius={width > breakPoints.md ? 15 : 10}
          />
        )}

        <TrackInfoWrapper>
          <TrackTitle>
            {track?.title || <Skeleton width={width > breakPoints.md ? 320 : 170} />}
          </TrackTitle>

          <TrackSubTitle>
            {track?.artist?.name || <Skeleton width={width > breakPoints.md ? 250 : 120} />}
          </TrackSubTitle>
        </TrackInfoWrapper>
      </TableDataTrackInfo>

      {width > breakPoints.md && (
        <DurationTableData>
          {secondsToMinutes(track?.duration) || <Skeleton width={40} />}
        </DurationTableData>
      )}
      {width > breakPoints.md && (
        <TableData>{track?.album?.title || <Skeleton width={250} />}</TableData>
      )}

      <TableData>
        <ActionWrapper>
          {track ? (
            <IconButton
              onClick={(event) => {
                addToFavorites(track.id);
                event.stopPropagation(); // doesnt trigger the onClick of the parent
              }}
            >
              <Heart width={25} height={25} fill={isSaved ? theme.colors.white : "none"} />
            </IconButton>
          ) : (
            <Skeleton width={25} height={25} />
          )}
        </ActionWrapper>
      </TableData>
    </StyledTrackRow>
  );
};

TrackRow.propTypes = {
  isSaved: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onClick: PropTypes.func,
  addToFavorites: PropTypes.func,
  track: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    duration: PropTypes.number,
    preview: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    album: PropTypes.shape({
      title: PropTypes.string,
      cover: PropTypes.string,
    }),
  }),
  index: PropTypes.number,
};

export default TrackRow;
