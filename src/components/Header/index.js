import { Logo, Lens } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import React from "react";
import { LogoWrapper, Wrapper } from "./styled";
import IconButton from "components/ui/IconButton";
import { ContentWrapper } from "components/Layout";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ContentWrapper>
      <Wrapper>
        <Link to="/">
          <LogoWrapper>
            <Logo />
            <SectionSubtitle>Za Music</SectionSubtitle>
          </LogoWrapper>
        </Link>
        <Link to="/search">
          <IconButton withBackground height={58} width={58}>
            <Lens />
          </IconButton>
        </Link>
      </Wrapper>
    </ContentWrapper>
  );
};

export default Header;
