import { SectionSubtitle } from "components/ui/Typography";
import styled from "styled-components";

export const TableTitle = styled(SectionSubtitle)`
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-top: 52px;
`;

export const SearchInput = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightWhite};
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  line-height: 27px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 10px 54px;
  background-image: ${(props) => `url(${props.SearchIcon})`};
  background-repeat: no-repeat;
  background-position: 17px 15px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.white};
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`;
