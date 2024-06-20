import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT, MOBILE_HEADER_HEIGHT } from "common/constants";
import { Subtext } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: ${(props) => (props.full ? "flex-start" : `center`)};
  height: ${PLAYER_HEIGHT}px;
  background-color: ${({ theme, full }) =>
    full ? theme.colors.black : theme.colors.secondaryBlack};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex["30"]};

  ${device.lg} {
    height: ${(props) =>
      props.full ? `calc(100vh - ${MOBILE_HEADER_HEIGHT}px)` : `${MOBILE_PLAYER_HEIGHT}px`};
    border-top-right-radius: ${(props) => (props.full ? 0 : `25px`)};
    border-top-left-radius: ${(props) => (props.full ? 0 : `25px`)};
  }
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  min-width: 400px;

  ${device.xl} {
    min-width: 280px;
    gap: 15px;
  }
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  ${device.lg} {
    gap: 2px;
  }
`;

export const TrackImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;
  ${device.md} {
    width: 45px;
    height: 45px;
  }
`;

export const ArtistName = styled(Subtext)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;

  ${device.lg} {
    margin: ${(props) => (props.full ? "0 auto" : "0")};
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  width: 100%;

  ${device.lg} {
    margin: ${(props) => (props.full ? "40px 0" : "0")};
  }
`;
export const MobileTrackRow = styled.div`
  display: flex;
  justify-content: ${(props) => (props.full ? "flex-start" : `space-between`)};
  align-items: center;
`;
export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: 130px;
  min-width: 180px;

  ${device.xl} {
    margin: ${(props) => (props.full ? "35px auto 0" : "0 0 0 50px")};
    width: ${(props) => (props.full ? "65%" : "auto")};
  }
`;

export const TrackTime = styled(Subtext)`
  width: 80px;
  margin: 0 20px;
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : "inherit")};

  ${device.lg} {
    margin: ${(props) => (props.last ? "0 0 0 20px" : 0)};
    text-align: ${(props) => (props.last ? "center" : "inherit")};
  }
`;

export const BackButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 18px;
  line-height: 27px;
  padding: 10px 0;
  margin-bottom: 30px;
  margin-top: 27px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
`;

export const BigTrackImage = styled.img`
  height: 311px;
  width: 311px;
  border-radius: 10px;
  margin: 0 auto 37px;
`;
