import styled from "styled-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Text from "./Text";
import navOptions from "../config/navOptions";
import Link from "next/link";
import Button from "./Button";
import { BLUE, WHITE } from "../styles/colors";
import Container from "./Container";
import Icon from "./Icon";

const StyledHeader = styled.header`
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

    return (
        <StyledHeader>
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
            </StyledNav>
        </StyledHeader>
    )
}

export default Nav;