import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import workData from "../../config/workData";
import colors, { GREEN } from "../../styles/colors";
import { srConfig } from "../../utils/scrollReveal";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { KEY_CODES } from "../../utils/keyCodes";

interface StyledTabButtonProps {
    isActive: boolean;
}

interface StyledHighlightProps {
    activeTabId: number;
}

const StyledWorkSection = styled.section`
    max-width: 900px;
    height: 100vh;
    margin: 0px auto;
    padding: 100px 0px;

    h2 {
        font-family: Verdana, sans-serif;
        font-size: 30px;
        color: ${colors.BLUE};
        margin-bottom: 20px;
    }

    .inner {
        display: flex;

        @media (max-width: 600px) {
            display: block;
        }

        // Prevent container from jumping
        @media (min-width: 700px) {
            min-height: 340px;
        }
    }
`

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button<StyledTabButtonProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: var(--tab-height);
    padding: 0 20px 2px;
    border-left: 2px solid ${colors.BLUE_DARK_80};
    border-right: none;
    border-top: none;
    border-bottom: none;
    background-color: transparent;
    color: ${({ isActive }) => (isActive ? colors.BLUE : colors.WHITE)};
    font-family: Verdana, sans-serif;
    font-size: 18px;
    text-align: left;
    white-space: nowrap;

    @media (max-width: 768px) {
        padding: 0 15px 2px;
    }
    @media (max-width: 600px) {
        min-width: 120px;
        padding: 0 15px;
        border-left: 0;
        border-bottom: 2px solid ${colors.GREEN};
        text-align: center;
    }

    &:hover,
    &:focus {
        background-color: ${colors.BLUE_DARK_80};
    }

    :focus {
        border-left: 2px solid ${colors.BLUE};
    }
`;


const StyledHighlight = styled.div<StyledHighlightProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    padding: 5px 0 0 0;
    margin: 0;
    list-style: none;
    font-size: 16px;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.BLUE};
      }
    };
  }

  h3 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: ${colors.BLUE};

      a {
        color: ${colors.BLUE};
        text-decoration: none;
      }
    }
  }

  .range {
    margin-bottom: 25px;
    color: ${colors.WHITE};
    font-family: Verdana, sans-serif;
    font-size: 14px;
  }
`;

const Work = () => {
  
    const [activeTabId, setActiveTabId] = useState<number>(0);
    const [tabFocus, setTabFocus] = useState<number>(0);
    const tabs: React.MutableRefObject<HTMLButtonElement[]> = useRef([]);
    const revealContainer = useRef(null);

    useEffect(() => {
        async function animate() {
            if (revealContainer.current) {
              const sr = (await import("scrollreveal")).default
              sr().reveal(revealContainer.current, srConfig())
            }
        }
        animate();
    }, []);
  
    const focusTab = () => {
      if (tabs.current[tabFocus]) {
        tabs.current[tabFocus].focus();
        return;
      }
      // If we're at the end, go to the start
      if (tabFocus >= tabs.current.length) {
        setTabFocus(0);
      }
      // If we're at the start, move to the end
      if (tabFocus < 0) {
        setTabFocus(tabs.current.length - 1);
      }
    };
  
    // Only re-run the effect if tabFocus changes
    useEffect(() => focusTab(), [tabFocus]);
  
    // Focus on tabs when using up & down arrow keys
    // const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    //   switch (e.key) {
    //     case KEY_CODES.ARROW_UP: {
    //       e.preventDefault();
    //       setTabFocus(tabFocus - 1);
    //       break;
    //     }
  
    //     case KEY_CODES.ARROW_DOWN: {
    //       e.preventDefault();
    //       setTabFocus(tabFocus + 1);
    //       break;
    //     }
  
    //     default: {
    //       break;
    //     }
    //   }
    // };
  
    return (
      <StyledWorkSection id="work" ref={revealContainer}>
        <h2 className="numbered-heading">Work Experience</h2>
  
        <div className="inner">
          <StyledTabList role="tablist" aria-label="Job tabs">
            {workData.map(({ company }, i) => {

                return (
                    <StyledTabButton
                        key={i}
                        isActive={activeTabId === i}
                        onClick={() => setActiveTabId(i)}
                        ref={el => el !== null && (tabs.current[i] = el)}
                        id={`tab-${i}`}
                        role="tab"
                        tabIndex={activeTabId === i ? 0 : -1}
                        aria-selected={activeTabId === i ? true : false}
                        aria-controls={`panel-${i}`}
                    >
                        <span>{company}</span>
                    </StyledTabButton>
                );
              })}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>
  
          <StyledTabPanels>
            {workData.map(({ title, url, location, company, range, bullets, techUsed }, i) => {
  
                return (
                  <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                        <StyledTabPanel
                            id={`panel-${i}`}
                            role="tabpanel"
                            tabIndex={activeTabId === i ? 0 : -1}
                            aria-labelledby={`tab-${i}`}
                            aria-hidden={activeTabId !== i}
                            hidden={activeTabId !== i}
                        >
                            <h3>
                                <span>{title}</span>
                                <span className="company">
                                    &nbsp;@&nbsp;
                                    <a href={url} className="inline-link">
                                        {company}
                                    </a>
                                </span>
                            </h3>
    
                        <p className="range">{`${range}   ·   ${location}`}</p>

                        <ul>
                            {bullets.map(({text, innerBullets}, i) => (
                                <li key={i}>
                                    {text}
                                    {innerBullets.length ? (
                                        <ul>
                                            {innerBullets.map((value, key) => (
                                                <li key={key}>{value}</li>
                                            ))}
                                        </ul>
                                    ): null}
                                </li>
                            ))}
                        </ul>
                        
                    </StyledTabPanel>
                  </CSSTransition>
                );
              })}
          </StyledTabPanels>
        </div>
      </StyledWorkSection>
    );
  };
  
  export default Work;
  