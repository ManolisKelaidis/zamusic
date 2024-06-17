import Button from "components/ui/Button";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 24px 0 35px;
  justify-content: space-between;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 0px 64px 123px;
`;

export const PlayButton = styled(Button)`
 display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.4;
`;
