import React from 'react';
import styled from 'styled-components';
import Side from './Side';
import socials from '../config/socials';
import Icon, { IconName } from './Icon';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
  }

  li {
    padding: 10px;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }
`;

const Social = () => (
  <Side orientation="left">
    <StyledSocialList>
      {socials.map(({ url, icon, name, onClick }, i) => (
        <li key={i}>
          <Icon size={40} name={icon as IconName} onClick={onClick}/>
        </li>
      ))}
    </StyledSocialList>
  </Side>
);

export default Social;