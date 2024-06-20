import React, { useContext } from "react";
import { HeroImage, PlayButton, TextWrapper, Wrapper } from "./styled";
import DesktopRadioIamge from "assets/images/radio-desktop.png";
import TabletRadioImage from "assets/images/radio-tablet.png";
import { ButtonText, MainTitle, Text } from "components/ui/Typography";
import { Play } from "components/ui/Icons";
import PropTypes from "prop-types";
import { actions } from "context/playerReducer";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { useWindowSize } from "hooks/useWindowSize";
import { breakPoints } from "styles/BreakPoints";
export default function Hero({ tracks }) {
  const dispatch = useContext(PlayerDispatchContext);
  const { width } = useWindowSize();
  const handlePlayClick = () => {
    dispatch({
      type: actions.SET_TRACKS_DATA,
      track: tracks[0],
      tracks: tracks,
      isPlaying: true,
    });
  };

  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <Text>Pick your todays mood. </Text>
        <Text>We will play a perfect mix!</Text>
        <PlayButton disabledx={!tracks || tracks.length <= 0} onClick={handlePlayClick}>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <HeroImage
        src={width < breakPoints.xl ? TabletRadioImage : DesktopRadioIamge}
        alt="Radio Image"
      />
    </Wrapper>
  );
}

Hero.propTypes = {
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
