import React from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { BLUE } from "../styles/colors";

interface ProgressBarProps {
    value: number;
    color?: string;
}

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid white;
  border-radius: 10px;
  position: relative;
`;

const ProgressBarInner = styled.div<ProgressBarProps>`
    width: ${props => (props.value / 10) * 100}%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.color || BLUE};
    border-radius: 10px;
    overflow: hidden;

    &.fade-enter {
        width: 0%;
    }

    &.fade-enter-active {
        width: ${props => (props.value / 10) * 100}%;
        transition: width 5000ms ease-in-out;
    }
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ value, color })  => {
  return (
    
      <ProgressBarContainer>
        <CSSTransition in={true} timeout={500} classNames="fade" unmountOnExit>
            <ProgressBarInner value={value} color={color} />
        </CSSTransition>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

