import styled from "styled-components";
import { Text } from "components/ui/Typography";
import { device } from "styles/BreakPoints";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
`;

export const Image = styled.img`
  height: 95px;
  width: 95px;
  border-radius: 50%;
`;

export const ArtistName = styled(Text)`
  max-width: 140px;
  text-align: center;

  ${device.md} {
    width: 75px;
    font-size: 16px;
    line-height: 19px;
  }
`;
