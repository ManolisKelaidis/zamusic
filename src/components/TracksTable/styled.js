import styled from "styled-components";
import { Subtext, Text } from "components/ui/Typography";

export const TableHead = styled.thead`
  width: 100%;
  text-align: left;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHeading = styled.th`
  padding: 30px 20px 30px ${(props) => (props.first ? "30px" : "0")};
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const TableData = styled.td`
  padding: 15px 20px 15px 0;
`;

export const TableDataTrackInfo = styled(TableData)`
  display: flex;
  gap: 15px;
  padding: 15px 20px 15px 0;
`;

export const Line = styled.td`
  background: linear-gradient(
    90deg,
    rgba(198, 198, 198, 0) 0%,
    #c6c6c6 50.54%,
    rgba(198, 198, 198, 0) 98.02%
  );
  height: 1px;
`;
