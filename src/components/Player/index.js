import React, { useRef, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ContentWrapper } from "components/Layout";
import {
  ArtistName,
  ControlsWrapper,
  TrackImage,
  TrackInfoTextWrapper,
  TrackInfoWrapper,
  Wrapper,
  ProgressWrapper,
  TrackTime,
  VolumeWrapper,
} from "./styled";

import { TrackInfoImage } from "components/TracksTable/TrackRow/styled";
import { Text } from "components/ui/Typography";
import IconButton from "components/ui/IconButton";
import { formatSecondsToMSS } from "utils/time";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "components/ui/Icons";
import Slider, { Range } from "rc-slider";
import { theme } from "styles/Theme";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/playerReducer";
import { useWindowSize } from "hooks/useWindowSize";
import { breakPoints } from "styles/BreakPoints";
import { MobileTrackRow } from "./styled";
import { BackButton } from "./styled";
import { useLocation } from "react-router-dom";
import { BigTrackImage } from "./styled";
import { BigPlayerWrapper } from "./styled";

function Player(props) {
  const { width } = useWindowSize();
  const {
    togglePlay,
    toggleOpen,
    toggleVolume,
    onTimeUpdate,
    onTimeDrag,
    onVolumeChange,
    handleNextSong,
    handlePrevSong,
    playerState,
    track,
    audioRef,
    isPlaying,
  } = usePlayer({ width });
  if (!track) {
    return null;
  }
  return (
    <Wrapper onClick={playerState.isOpened ? null : toggleOpen} full={playerState.isOpened}>
      <audio
        hidden
        ref={audioRef}
        src={track.preview}
        controls
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        onEnded={handleNextSong}
      />{" "}
      <PlayerLayout
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        track={track}
        handlePrevSong={handlePrevSong}
        handleNextSong={handleNextSong}
        playerState={playerState}
        onVolumeChange={onVolumeChange}
        onTimeDrag={onTimeDrag}
        toggleVolume={toggleVolume}
        toggleOpen={toggleOpen}
      />
    </Wrapper>
  );
}

function PlayerLayout({
  isPlaying,
  handleNextSong,
  playerState,
  onTimeDrag,
  handlePrevSong,
  togglePlay,
  toggleVolume,
  onVolumeChange,
  track,
  toggleOpen,
}) {
  if (playerState.isOpened) {
    return (
      <ContentWrapper gap="14" display="flex" direction="column">
        <BackButton onClick={toggleOpen}> Back</BackButton>
        <BigTrackImage src={track.album.cover_big} />

        <MobileTrackRow>
          <TrackInfoWrapper>
            <TrackInfoTextWrapper>
              <Text>{track.title}</Text>
              <ArtistName>{track.title}</ArtistName>
            </TrackInfoTextWrapper>
          </TrackInfoWrapper>
        </MobileTrackRow>
        <ProgressWrapper full={1}>
          <TrackTime> {formatSecondsToMSS(playerState?.currentTime)}</TrackTime>
          <Slider
            onChange={onTimeDrag}
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
            style={{ padding: 3 }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime last={1} grey>
            {formatSecondsToMSS(playerState?.duration)}
          </TrackTime>
        </ProgressWrapper>
        <ControlsWrapper full={1}>
          <IconButton>
            <SkipLeft onClick={handlePrevSong} />
          </IconButton>
          <IconButton onClick={togglePlay} withBackground width={55} height={55}>
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton>
            <SkipRight onClick={handleNextSong} />
          </IconButton>
        </ControlsWrapper>
        <VolumeWrapper full={1}>
          <IconButton onClick={toggleVolume} height={24} width={24}>
            <Volume />
          </IconButton>

          <Slider
            step={0.2}
            min={0}
            max={1}
            value={playerState.volume}
            onChange={onVolumeChange}
            style={{ padding: 3 }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    );
  }
  const { width } = useWindowSize();
  if (width < breakPoints.lg) {
    return (
      <ContentWrapper gap="14" display="flex" items="space-between" direction="column">
        <MobileTrackRow>
          <TrackInfoWrapper>
            <TrackImage src={track.album.cover}></TrackImage>
            <TrackInfoTextWrapper>
              <Text>{track.title}</Text>
              <ArtistName>{track.title}</ArtistName>
            </TrackInfoTextWrapper>
          </TrackInfoWrapper>
          <ControlsWrapper>
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                togglePlay();
              }}
              withBackground
              width={55}
              height={55}
            >
              {isPlaying ? <Pause /> : <Play />}
            </IconButton>
          </ControlsWrapper>
        </MobileTrackRow>
        <ProgressWrapper
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <TrackTime> {formatSecondsToMSS(playerState?.currentTime)}</TrackTime>
          <Slider
            onChange={onTimeDrag}
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
            style={{ padding: 3 }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime last={1} grey>
            {formatSecondsToMSS(playerState?.duration)}
          </TrackTime>
        </ProgressWrapper>
      </ContentWrapper>
    );
  }
  return (
    <ContentWrapper items="center" display="flex">
      <TrackInfoWrapper>
        <TrackImage src={track.album.cover}></TrackImage>
        <TrackInfoTextWrapper>
          <Text>{track.title}</Text>
          <ArtistName>{track.title}</ArtistName>
        </TrackInfoTextWrapper>
      </TrackInfoWrapper>
      <ControlsWrapper>
        <IconButton>
          <SkipLeft onClick={handlePrevSong} />
        </IconButton>
        <IconButton onClick={togglePlay} withBackground width={55} height={55}>
          {isPlaying ? <Pause /> : <Play />}
        </IconButton>
        <IconButton>
          <SkipRight onClick={handleNextSong} />
        </IconButton>
      </ControlsWrapper>
      <ProgressWrapper>
        <TrackTime>{formatSecondsToMSS(playerState?.currentTime)}</TrackTime>
        <Slider
          onChange={onTimeDrag}
          step={0.2}
          min={0}
          max={playerState.duration}
          value={playerState.currentTime}
          style={{ padding: 3 }}
          trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
          railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
          handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
        />
        <TrackTime grey>{formatSecondsToMSS(playerState?.duration)}</TrackTime>
      </ProgressWrapper>
      <VolumeWrapper>
        <IconButton onClick={toggleVolume} height={24} width={24}>
          <Volume />
        </IconButton>

        <Slider
          step={0.2}
          min={0}
          max={1}
          value={playerState.volume}
          onChange={onVolumeChange}
          style={{ padding: 3 }}
          trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
          railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
          handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
        />
      </VolumeWrapper>
    </ContentWrapper>
  );
}

function usePlayer({ width }) {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);
  const location = useLocation();
  const [playerState, setPlayerState] = useState({
    isPlaying: isPlaying,
    currentTime: 0,
    duration: 0,
    volume: 0.2,
    isOpened: false,
  });
  const audioRef = useRef();

  function togglePlay() {
    dispatch({
      type: actions.TOGGLE_PLAY,
    });
  }

  function toggleOpen() {
    if (width > breakPoints.lg && !playerState.isOpened) return;
    setPlayerState((prev) => ({ ...prev, isOpened: !prev.isOpened }));
  }

  function onTimeUpdate() {
    if (!audioRef?.current) return;
    //setPlayerState((prevState) => ({ ...prevState, currentTime: !prevState.isPlaying }));
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setPlayerState((prevState) => ({ ...prevState, currentTime, duration }));
  }

  function onTimeDrag(newTime) {
    if (!audioRef?.current) return;
    //setPlayerState((prevState) => ({ ...prevState, currentTime: !prevState.isPlaying }));
    audioRef.current.currentTime = newTime;

    setPlayerState((prevState) => ({ ...prevState, currentTime: newTime }));
  }

  function onVolumeChange(newVolume) {
    if (!audioRef?.current) return;
    //setPlayerState((prevState) => ({ ...prevState, currentTime: !prevState.isPlaying }));
    audioRef.current.volume = newVolume;
    setPlayerState((prevState) => ({ ...prevState, volume: newVolume }));
  }

  function toggleVolume() {
    const newVolume = playerState.volume > 0 ? 0 : 1;
    onVolumeChange(newVolume);
  }

  function handleNextSong() {
    dispatch({ type: actions.TOGGLE_NEXT });
  }

  function handlePrevSong() {
    dispatch({ type: actions.TOGGLE_PREV });
  }
  useEffect(() => {
    if (!audioRef?.current) return;

    if (isPlaying) {
      audioRef?.current.play().catch((err) => console.log(err));
    } else {
      audioRef?.current.pause();
    }
  }, [track, audioRef, isPlaying]);

  useEffect(() => {
    if (playerState.isOpened) toggleOpen();
  }, [location]);

  useEffect(() => {
    if (playerState.isOpened) {
      window.scroll(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [playerState.isOpened]);

  if (width < breakPoints.lg && playerState.isOpened) {
    toggleOpen();
  }

  return {
    togglePlay,
    toggleOpen,
    toggleVolume,
    onTimeUpdate,
    onTimeDrag,
    onVolumeChange,
    handleNextSong,
    handlePrevSong,
    playerState,
    track,
    audioRef,
    isPlaying,
  };
}
PlayerLayout.propTypes = {
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
      cover_big: PropTypes.string,
    }),
  }),
  isPlaying: PropTypes.bool,
  handleNextSong: PropTypes.func,
  handlePrevSong: PropTypes.func,
  playerState: PropTypes.shape({
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
    isOpened: PropTypes.bool,
  }),
  onTimeDrag: PropTypes.func,
  togglePlay: PropTypes.func,
  onVolumeChange: PropTypes.func,
  toggleVolume: PropTypes.func,
  toggleOpen: PropTypes.func,
  open: PropTypes.bool,
};

export default Player;
