import IconButton from "components/ui/IconButton";
import styled from "styled-components";
import { breakPoints, device } from "styles/BreakPoints";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  gap: 35px;
  overflow: hidden;

  ${device.md} {
    gap: 20px;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${device.md} {
    gap: 8px;
  }
`;

export const GenresWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 116px;
  margin-top: 20px;
  gap: 20px;
  ${device.md} {
    gap: 9px;
  }
`;
export const Button = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;

export const GenreSkeletonWrapper = styled.div`
  display: flex;
`;
