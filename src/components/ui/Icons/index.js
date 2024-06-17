import { styled } from "styled-components";
import { ReactComponent as PlayIcon } from "assets/play.svg";
import { ReactComponent as SkipIcon } from "assets/skip.svg";
import { ReactComponent as PauseIcon } from "assets/pause.svg";
import { ReactComponent as VolumeIcon } from "assets/volume.svg";
import { ReactComponent as MusicIcon } from "assets/music.svg";
import { ReactComponent as ArrowIcon } from "assets/arrow.svg";
import { ReactComponent as LensIcon } from "assets/lens.svg";
import { ReactComponent as HeartIcon } from "assets/heart.svg";
import { ReactComponent as Logo } from "assets/logo_icon.svg";
const Play = styled(PlayIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const SkipLeft = styled(SkipIcon)`
  fill: ${(props) => props.color || "white"};
`;

const SkipRight = styled(SkipLeft)`
  transform: rotate(180deg);
`;

const Pause = styled(PauseIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const Volume = styled(VolumeIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;
const Music = styled(MusicIcon)`
  fill: ${(props) => props.color || "none"};
  stroke: ${(props) => props.color || "#878787"};
`;

const Back = styled(ArrowIcon)`
  stroke: ${(props) => props.color || "#878B92"};
`;

const Next = styled(Back)`
  transform: rotate(180deg);
`;

const Lens = styled(LensIcon)`
  fill: ${(props) => props.color || "white"};
`;
const Heart = styled(HeartIcon)`
  stroke: ${(props) => props.color || "white"};
`;

export { Play, SkipLeft, SkipRight, Pause, Volume, Music, Next, Back, Lens, Heart, Logo };
