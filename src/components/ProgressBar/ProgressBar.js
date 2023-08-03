/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let containerHeight = "12px";
  let borderRadius = "4px";
  let progressPadding = "0";
  if (size === "large") {
    containerHeight = "24px";
    borderRadius = "8px";
    progressPadding = "4px";
  }
  if (size === "small") {
    containerHeight = "8px";
    borderRadius = "4px";
    progressPadding = "0";
  }

  const ProgressContainer = styled.div`
    height: ${containerHeight};
    border-radius: ${borderRadius};
    width: 100%;
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: ${progressPadding};
    overflow: hidden;
  `;

  const ProgressBar = styled.div`
    background-color: ${COLORS.primary};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 100%;
    width: ${value}%;
  `;

  return (
    <ProgressContainer>
      <ProgressBar></ProgressBar>
    </ProgressContainer>
  );
};

export default ProgressBar;
