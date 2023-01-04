import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Text from "./Text";
import navOptions from "../config/navOptions";
import Link from "next/link";
import Button from "./Button";
import { BLUE, NAVY_3, WHITE } from "../styles/colors";
import Container from "./Container";
import Icon from "./Icon";
import Menu from "./Menu";
import useScrollDirection from "../hooks/useScrollDirection";

interface StyledHeaderProps {
    scrollDirection: "down" | "up";
    scrolledToTop: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 11;
    padding: 20px 50px;
    width: 100%;
    height: 100px;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    @media (max-width: 1080px) {
        padding: 0 40px;
        /* max-width: 100vw; */
    }
    @media (max-width: 768px) {
        padding: 0 25px;
        /* max-width: 100vw; */
    }

    ${props => props.scrollDirection === 'up' && !props.scrolledToTop &&
        css`
            height: var(--nav-scroll-height);
            transform: translateY(0px);
            box-shadow: 0 10px 30px -10px ${NAVY_3};
        `
    };

    ${props => props.scrollDirection === 'down' && !props.scrolledToTop &&
        css`
            height: var(--nav-scroll-height);
            transform: translateY(calc(var(--nav-scroll-height) * -1));
            box-shadow: 0 10px 30px -10px ${NAVY_3};
        `
    };
`;

const StyledLogoContainer = styled.div`
    span {
        font-family: Verdana, sans-serif;
        color: ${WHITE};
        

        &:hover {
            cursor: pointer;
            color: ${BLUE};
            text-decoration: none !important;
        }
    }
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    z-index: 12;
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    padding: 0;
    margin: 0 10px;
    list-style: none;
    display: flex;

    li {
      margin: 0 5px;
      position: relative;
      font-size: 18px;

        :hover {
            a {
                color: ${WHITE};
            }
        }

        a {
            padding: 10px;
            color: ${BLUE};
            transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
            text-decoration: none;

            &:before {
                margin-right: 5px;

                text-align: right;
            }

        
      }
    }
  }
`;


const Nav = () => {

    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState<boolean>(true);

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <StyledNav>
                <TransitionGroup>
                    <CSSTransition classNames={'fade'} timeout={1000}>
                        <StyledLogoContainer>
                            <Text onClick={() => window.location.hash = "main"} size={40}>BK</Text>
                        </StyledLogoContainer>
                    </CSSTransition>
                </TransitionGroup>

                <StyledLinks>
                    <ol>
                        <TransitionGroup component={null}>
                        {navOptions.map(({ url, name }, i) => (
                            <CSSTransition key={i} classNames={'fadedown'} timeout={1000}>
                                <li key={i} style={{ transitionDelay: `100ms` }}>
                                    <Link href={url}>{name}</Link>
                                </li>
                            </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ol>

                    <TransitionGroup component={null}>
                        <CSSTransition classNames={'fadedown'} timeout={1000}>
                            <div style={{ transitionDelay: '100ms' }}>
                                <Button variant="primary" onClick={() => window.open("/resume.pdf", "_blank")}>Resume</Button>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </StyledLinks>

                <TransitionGroup component={null}>
                    <CSSTransition classNames={'fade'} timeout={2000}>
                        <Menu />
                    </CSSTransition>
                </TransitionGroup>
            </StyledNav>
        </StyledHeader>
    )
}

export default Nav;