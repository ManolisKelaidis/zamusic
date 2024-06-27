import styled from "styled-components";
import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { device } from "styles/BreakPoints";
import { SmallText } from "components/ui/Typography";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT} px + 50px);

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT} px + 50px);
  }

  ${device.md} {
    gap: 45px;
    padding-top: 28px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  ${device.md} {
    justify-content: center;
  }
`;

export const SongsCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BigArtistImage = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 10px;
  //margin: 0 auto 37px;

  ${device.md} {
    height: 200px;
    width: 200px;
  }
`;

export const SmallArtistText = styled(SmallText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
  ${device.md} {
    font-size: 12px;
  }
`;

export const ArtistWrapper = styled.div`
  display: flex;
  gap: 50px;

  ${device.md} {
    gap: 15px;
  }
`;
