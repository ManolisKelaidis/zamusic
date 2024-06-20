import Button from "components/ui/Button";
import { MainTitle } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";
const HERO_IMAGE_BREAKPOINT = 1050;
export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 24px 0 35px;
  justify-content: space-between;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};

  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    align-items: center;
    height: 305px;
    text-align: center;
    padding: 41px 32px;
    margin: 30px 0 35px;
  }
`;

export const TextWrapper = styled.div`
  padding-left: 123px;

  ${device.xl} {
    padding-left: 70px;
  }
  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    width: 100%;
    padding: 0px;
  }
`;

export const HeroImage = styled.img`
  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    display: none;
  }
`;
export const HeroTitleText = styled(MainTitle)`
  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    font-size: 45px;
    line-height: 68px;
  }
`;

export const HeroText = styled(Text)``;

export const PlayButton = styled(Button)`
 display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    margin: 30px auto;
    width: 100%;
    justify-content: center;
  }
  &:hover {
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.4;

    
`;
