import styled from "styled-components";
import { Subtext, Text } from "components/ui/Typography";
import { device } from "styles/BreakPoints";

export const ActionWrapper = styled.div`
  margin-left: 20px;
`;

export const TableData = styled.td`
  padding: 15px 20px 15px 0;
`;

export const FirstTableData = styled.td`
  padding: 15px 20px 15px 30px;
`;

export const TableDataTrackInfo = styled(TableData)`
  display: flex;
  gap: 15px;
  padding: 15px 20px 15px 0;
  ${device.md} {
    gap: 10px;
  }
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${device.md} {
    gap: 2px;
  }
`;
export const TrackInfoImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;

  ${device.md} {
    width: 45px;
    height: 45px;
    border-radius: 10px;
  }
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const TrackSubTitle = styled(Subtext)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${device.md} {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const SongNumberText = styled(Subtext)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const DurationTableData = styled(TableData)`
  min-width: 140px;
`;

export const StyledTrackRow = styled.tr`
  cursor: pointer;
  border-radius: 15px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    .text {
      display: none;
    }
    .icon {
      display: block;
    }
    background-color: ${({ theme }) => theme.colors.lightWhite};
  }
  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const IconWrapper = styled.div`
  display: none;
  width: 20px;
  height: 20px;
`;
export const AlbumCoverWrapper = styled.div``;
