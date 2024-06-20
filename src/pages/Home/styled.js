import styled from "styled-components";
import { SectionSubtitle } from "components/ui/Typography";
import { device } from "styles/BreakPoints";
import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";

export const TrendsAndArtistsSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;

  padding-bottom: calc(${PLAYER_HEIGHT}px +50px)
  overflow: hidden;

  ${device.xl} {
    display: flex;
    flex-direction: column;
    gap: 45px;
  }

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px +50px)
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
`;

export const GreyTitle = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const AsideStyled = styled.aside`
  margin-left: 90px;
  ${device.xl} {
    margin-left: 0px;
  }
`;
