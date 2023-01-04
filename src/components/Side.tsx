import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

interface SideProps {
    children: React.ReactNode,
    orientation: string,
}

const StyledSideElement = styled.div<SideProps>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = ({ children, orientation }: SideProps) => {

  return (
    <StyledSideElement orientation={orientation}>
        <TransitionGroup component={null}>
            <CSSTransition classNames={'fade'} timeout={2000}>
                {children}
            </CSSTransition>
        </TransitionGroup>
    </StyledSideElement>
  );
};



export default Side;
