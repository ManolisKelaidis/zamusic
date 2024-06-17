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
} from "./styles";

import { TrackInfoImage } from "components/TracksTable/TrackRow/styled";
import { Text } from "components/ui/Typography";
import IconButton from "components/ui/IconButton";
import { formatSecondsToMSS } from "utils/time";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "components/ui/Icons";
import Slider, { Range } from "rc-slider";
import { theme } from "styles/Theme";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/playerReducer";
const track = {
  id: 2463743855,
  title: "Pigeons",
  title_short: "Pigeons",
  title_version: "",
  link: "https://www.deezer.com/track/2463743855",
  duration: 12,
  rank: 93554,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview: "https://cdns-preview-f.dzcdn.net/stream/c-f69be3f4699d23836511df78eed8fb45-1.mp3",
  md5_image: "f58f3f9592fca4dc221c16eb155caf62",
  position: 1,
  artist: {
    id: 147490,
    name: "Root",
    link: "https://www.deezer.com/artist/147490",
    picture: "https://api.deezer.com/artist/147490/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/bc0c129bdc08d1aac4af7f8e2c44dfcc/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/bc0c129bdc08d1aac4af7f8e2c44dfcc/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/bc0c129bdc08d1aac4af7f8e2c44dfcc/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/bc0c129bdc08d1aac4af7f8e2c44dfcc/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/147490/top?limit=50",
    type: "artist",
  },
  album: {
    id: 490602765,
    title: "Pigeons",
    cover: "https://api.deezer.com/album/490602765/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/f58f3f9592fca4dc221c16eb155caf62/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/f58f3f9592fca4dc221c16eb155caf62/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/f58f3f9592fca4dc221c16eb155caf62/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/f58f3f9592fca4dc221c16eb155caf62/1000x1000-000000-80-0-0.jpg",
    md5_image: "f58f3f9592fca4dc221c16eb155caf62",
    tracklist: "https://api.deezer.com/album/490602765/tracks",
    type: "album",
  },
  type: "track",
};
function Player(props) {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);

  const [playerState, setPlayerState] = useState({
    isPlaying: isPlaying,
    currentTime: 0,
    duration: 0,
    volume: 0.2,
  });
  const audioRef = useRef();

  function togglePlay() {
    dispatch({
      type: actions.TOGGLE_PLAY,
    });
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

  if (!track) {
    return null;
  }
  return (
    <Wrapper>
      {" "}
      <ContentWrapper display="flex">
        <audio
          hidden
          ref={audioRef}
          src={track.preview}
          controls
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onTimeUpdate}
          onEnded={handleNextSong}
        />
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
    </Wrapper>
  );
}

Player.propTypes = {};

export default Player;
