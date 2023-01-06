import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon, { IconName } from '../atoms/Icon';
import socials from '../../config/socials';
import { NAVY_2, WHITE, BLUE } from '../../styles/colors';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;
`;

const StyledSocialLinks = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        max-width: 270px;
        margin: 0 auto 10px;
        color: ${WHITE};
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        margin: 0;
        list-style: none;

        a {
            padding: 10px;
            color: ${WHITE};
            svg {
                width: 30px;
                height: 30px;
            }

            &:hover,
            &:focus {
                color: ${BLUE};
            }
        }
    }
`;

const StyledCredit = styled.div`
    color: ${NAVY_2};
    font-family: Tahoma, sans-serif;
    font-size: 15px;
    line-height: 1;

    a {
        padding: 10px;
        color: ${WHITE};
        text-decoration: none;

        &:hover,
        &:focus {
            color: ${BLUE};
        }
    }
`;

const Footer = () => {

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socials.map(({ name, icon, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={icon as IconName} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit>
        <a href="https://github.com/benkeegan98/portfolio">
          <div>Designed &amp; Built by Ben Keegan</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;