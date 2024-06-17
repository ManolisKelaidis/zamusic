import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styled";
export default function IconButton({ withBackground, ...props }) {
  return (
    <StyledButton bg={withBackground ? 1 : 0} {...props}>
      {props.children}
    </StyledButton>
  );
}

IconButton.propTypes = {
  children: PropTypes.element,
  withBackground: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};
