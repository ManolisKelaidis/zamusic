import Header from "components/Header";
import Player from "components/Player";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const ContentWrapper = styled.div`
  max-width: 1920px;
  padding: 0 120px;
  width: 100%;
  margin: 0 auto;

  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.items || "flex-start"};
  justify-content: ${(props) => props.items || "start"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"}px;

  ${device.md} {
    padding: 0px 15px;
  }
`;

export function Layout() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Player />
    </>
  );
}
