import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  background: none;
  color: ${(props) => props.theme.colors?.heading};
  background-clip: text;
  background: linear-gradient(
    to ${(props) => props.direction || "bottom right"},
    ${(props) => props.stopOne || "#FDB4FB"},
    ${(props) => props.stopTwo || "#A863FF"}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
`;

function HighlightText({ direction, stopOne, stopTwo, children }) {
  return <Wrapper {...{ direction, stopOne, stopTwo }}>{children}</Wrapper>;
}

export default HighlightText;
