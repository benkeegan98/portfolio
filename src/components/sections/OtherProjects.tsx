import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import otherProjectsData, { ExternalLinkType, ProjectDataType } from '../../config/otherProjectsData';
import { BLUE, BLUE_DARK_40, BLUE_DARK_60, BLUE_LIGHT_20, WHITE } from '../../styles/colors';
import { srConfig } from '../../utils/scrollReveal';
import Icon from '../Icon';

const StyledProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 900px;
    min-height: 100vh;
    margin: 0px auto;
    padding: 100px 0px;

    h2 {
        font-family: Verdana, sans-serif;
        font-size: 30px;
        color: ${BLUE};
        margin-bottom: 20px;
        text-align: left;
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

    .archive-link {
        font-family: Verdana, sans-serif;
        font-size: 14px;
        &:after {
            bottom: 0.1em;
        }
    }

    .projects-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(3, minmax(300px, 1fr));
        grid-gap: 15px;
        position: relative;
        margin-top: 50px;

        @media (max-width: 1080px) {
            grid-template-columns: repeat(3, minmax(250px, 1fr));
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(250px, 1fr));
        }
    }

    .more-button {
        color: ${BLUE};
        background-color: transparent;
        border: 1px solid ${BLUE};
        border-radius: var(--border-radius);
        font-size: 13px;
        font-family: Verdana, sans-serif;
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);
        padding: 1.25rem 1.75rem;

        &:hover,
        &:focus,
        &:active {
            background-color: ${BLUE_DARK_60};
            outline: none;
        }
        &:after {
            display: none !important;
        }
        margin: 80px auto 0;
    }

`;

const StyledProject = styled.li`
    position: relative;
    cursor: default;
    transition: var(--transition);


    &:hover,
    &:focus-within {
        .project-inner {
            transform: translateY(-7px);
        }
    }

    a {
        position: relative;
        z-index: 1;
    }

    .project-inner {
        box-shadow: 0 10px 30px -15px ${BLUE_DARK_40};
        transition: var(--transition);

        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px ${BLUE_DARK_40};
        }
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        border-radius: var(--border-radius);
        background-color: ${BLUE_DARK_60};
        transition: var(--transition);
        overflow: auto;
    }

    .project-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 35px;

        .folder {
            color: ${BLUE};
            svg {
                width: 40px;
                height: 40px;
            }
        }

        .project-links {
            display: flex;
            align-items: center;
            margin-right: -10px;
            color: ${WHITE};

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px 7px;

                svg {
                    width: 22px;
                    height: 22px;
                    margin-top: -4px;
                    color: ${WHITE}
                }

                &:hover,
                &:focus {
                    svg {
                        color: ${BLUE}
                    }
                }
            }
        }
    }

    .project-title {
        margin: 0 0 10px;
        color: ${WHITE};
        font-size: 22px;

        a {
            position: static;
            color: ${WHITE};
            text-decoration: none;

            &:before {
                content: '';
                display: block;
                position: absolute;
                z-index: 0;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
        }
    }

  .project-description {
        color: ${WHITE};
        font-size: 15px;

        a {
            display: inline-block;
            text-decoration: none;
            text-decoration-skip-ink: auto;
            position: relative;
            transition: var(--transition);
            color: ${BLUE};
            &:hover,
            &:focus,
            &:active {
                color: ${BLUE};
                outline: 0;
                &:after {
                    width: 100%;
                }
                & > * {
                    color: ${BLUE} !important;
                    transition: var(--transition);
                }
            }
            &:after {
                content: '';
                display: block;
                width: 0;
                height: 1px;
                position: relative;
                bottom: 0.37em;
                background-color: ${BLUE};
                transition: var(--transition);
                opacity: 0.5;
            }
        }
    }

    .project-tech-list {
        display: flex;
        align-items: flex-end;
        flex-grow: 1;
        flex-wrap: wrap;
        padding: 0;
        margin: 20px 0 0 0;
        list-style: none;

        li {
            font-family: Verdana, sans-serif;
            font-size: 12px;
            line-height: 1.75;

            &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`;

const OtherProjects = () => {
    
  
    const [showMore, setShowMore] = useState<boolean>(false);
    const revealTitle = useRef(null);
    // const revealArchiveLink = useRef(null);
    const revealProjects: React.MutableRefObject<HTMLLIElement[]> = useRef([]);

    useEffect(() => {
        async function animate() {
            if (revealTitle.current) {
                const sr = (await import("scrollreveal")).default
                sr().reveal(revealTitle.current, srConfig())
            }
            // if (revealProjects.current) {
            //     const sr = (await import("scrollreveal")).default
            //     revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
            // }
        }
        animate();
    }, []);
  
    const GRID_LIMIT = 6;
    const firstSix = otherProjectsData.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? otherProjectsData : firstSix;
  
    const projectInner = (project: ProjectDataType) => {

      const { title, description, tech, externalLinks } = project;
  
      return (
        <div className="project-inner">
          <header>
            <div className="project-top">
              <div className="folder">
                <Icon name='folder' />
              </div>
              {externalLinks && (
                <div className="project-links">
                    {externalLinks.map((link: ExternalLinkType, i: number) => (
                        <a key={i} href={link.url} aria-label={`${link.type} link`} target="_blank" rel="noreferrer">
                            <Icon name={link.type} />
                        </a>
                    ))}
                </div>
              )}
            </div>
  
            <h3 className="project-title">
              <a href={externalLinks ? externalLinks[0].url : undefined} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h3>
  
            <div className="project-description">
                {description}
            </div>
          </header>
  
          <footer>
            {tech && (
              <ul className="project-tech-list">
                {tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            )}
          </footer>
        </div>
      );
    };
  
    return (
      <StyledProjectsSection id="other-projects">
        <h2 ref={revealTitle}>Other Projects</h2>
  
        <ul className="projects-grid">
            <TransitionGroup component={null}>
                {projectsToShow.map((project: ProjectDataType, i: number) => (
                    <CSSTransition
                        key={i}
                        classNames="fadeup"
                        timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                        exit={false}
                    >
                        <StyledProject
                            key={i}
                            ref={el => el !== null && (revealProjects.current[i] = el)}
                            style={{
                                transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                            }}
                        >
                            {projectInner(project)}
                        </StyledProject>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
  
        <button className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      </StyledProjectsSection>
    );
  };
  
  export default OtherProjects;