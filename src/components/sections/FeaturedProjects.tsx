import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import featuredProjectsData from '../../config/featuredProjectsData';
import { BLUE, BLUE_DARK_20, BLUE_DARK_60, BLUE_DARK_80, BLUE_LIGHT_40, WHITE } from '../../styles/colors';
import { srConfig } from '../../utils/scrollReveal';
import Icon, { IconName } from '../atoms/Icon';
// import Image from '../Image';
import Image from 'next/image';

const StyledProjectsSection = styled.section`
    max-width: 900px;
    min-height: 100vh;
    margin: 0px auto;
    padding: 100px 0px;

    h2 {
        font-family: Verdana, sans-serif;
        font-size: 30px;
        color: ${BLUE};
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

const StyledProjectsGrid = styled.ul`
    list-style: none;

    a {
        position: relative;
        z-index: 1;
    }
`;

const StyledProject = styled.li`
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    @media (max-width: 768px) {
        box-shadow: 0 10px 30px -15px ${BLUE_DARK_80};
        transition: var(--transition);

        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px ${BLUE_DARK_80};
        }
    }

    &:not(:last-of-type) {
        margin-bottom: 100px;

        @media (max-width: 768px) {
            margin-bottom: 70px;
        }

        @media (max-width: 480px) {
            margin-bottom: 30px;
        }
    }

    &:nth-of-type(odd) {
        .project-content {
            grid-column: 7 / -1;
            text-align: right;

            @media (max-width: 1080px) {
                grid-column: 5 / -1;
            }
            @media (max-width: 768px) {
                grid-column: 1 / -1;
                padding: 40px 40px 30px;
                text-align: left;
            }
            @media (max-width: 480px) {
                padding: 25px 25px 20px;
            }
        }
        .project-tech-list {
            justify-content: flex-end;

            @media (max-width: 768px) {
                justify-content: flex-start;
            }

            li {
                margin: 0 0 5px 20px;

                @media (max-width: 768px) {
                margin: 0 10px 5px 0;
                }
            }
        }
        .project-links {
            justify-content: flex-end;
            margin-left: 0;
            margin-right: -10px;

        
            @media (max-width: 768px) {
                justify-content: flex-start;
                margin-left: -10px;
                margin-right: 0;
            }
        }
        .project-image {
            grid-column: 1 / 8;

            @media (max-width: 768px) {
                grid-column: 1 / -1;
            }

        }
    }

    .project-content {
        position: relative;
        grid-column: 1 / 7;
        grid-row: 1 / -1;

        @media (max-width: 1080px) {
            grid-column: 1 / 9;
        }

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            grid-column: 1 / -1;
            padding: 40px 40px 30px;
            z-index: 5;
        }

        @media (max-width: 480px) {
            padding: 30px 25px 20px;
        }
    }

    .project-overline {
        margin: 10px 0;
        color: ${BLUE};
        font-family: Verdana, sans-serif;
        font-size: 12px;
        font-weight: 400;
    }

    .project-title {
        a {
            color: ${WHITE};
            font-size: clamp(24px, 5vw, 28px);
            text-decoration: none;
            transition: var(--easing);

            &:hover {
                color: ${BLUE};
            }
        }

        @media (min-width: 768px) {
            margin: 0 0 20px;
        }

        @media (max-width: 768px) {
            color: ${WHITE};

            a {
                position: static;

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
    }

    .project-description {
        box-shadow: 0 10px 30px -15px ${BLUE_DARK_80};
        transition: var(--transition);

        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px ${BLUE_DARK_80};
        }

        position: relative;
        z-index: 2;
        padding: 25px;
        border-radius: var(--border-radius);
        background-color: ${BLUE_DARK_20};
        color: ${WHITE};
        font-size: 18px;

        @media (max-width: 768px) {
            padding: 20px 0;
            background-color: transparent;
            box-shadow: none;

            &:hover {
                box-shadow: none;
            }
        }

        strong {
        color: ${WHITE};
        font-weight: normal;
        }
    }

    .project-tech-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 2;
        margin: 25px 0 10px;
        padding: 0;
        list-style: none;

        li {
            margin: 0 20px 5px 0;
            color: ${WHITE};
            font-family: Verdana, sans-serif;
            font-size: 14px;
            white-space: nowrap;
        }

        @media (max-width: 768px) {
            margin: 10px 0;

            li {
                margin: 0 10px 5px 0;
                color: ${WHITE};
            }
        }
    }

    .project-links {
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 10px;
        margin-left: -10px;
        color: ${WHITE};

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;

            &.external {
                svg {
                    width: 30px;
                    height: 30px;
                    margin-top: -4px;
                }
            }

            svg {
                width: 30px;
                height: 30px;
                color: ${WHITE};
                cursor: pointer;

                &:hover {
                    color: ${BLUE};
                }
            }
        }

        .cta {
            color: ${BLUE};
            background-color: transparent;
            border: 1px solid ${BLUE};
            border-radius: var(--border-radius);
            padding: 0.75rem 1rem;
            font-size: 14px;
            font-family: Verdana, sans-serif;
            line-height: 1;
            text-decoration: none;
            cursor: pointer;
            transition: var(--transition);
            &:hover,
            &:focus,
            &:active {
                background-color: ${BLUE_LIGHT_40};
                outline: none;
            }
            &:after {
                display: none !important;
            }
            margin: 10px;
        }
    }

    .project-image {
        box-shadow: 0 10px 30px -15px ${BLUE_DARK_80};
        transition: var(--transition);

        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px ${BLUE_DARK_80};
        }
        grid-column: 6 / -1;
        grid-row: 1 / -1;
        position: relative;
        z-index: 1;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
            height: 100%;
            opacity: 0.25;
        }

        a {
            width: 100%;
            height: 100%;
            background-color: ${BLUE};
            border-radius: var(--border-radius);
            vertical-align: middle;

            &:hover,
            &:focus {
                background: transparent;
                outline: 0;

                &:before,
                .img {
                    background: transparent;
                    filter: none;
                }
            }

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 3;
            transition: var(--transition);
            background-color: ${BLUE_DARK_60};
            mix-blend-mode: screen;
        }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;

const FeaturedProjects = () => {
  
    const revealTitle = useRef(null);
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
  
    return (
      <StyledProjectsSection id="projects">
        {/* <h2> */}
        <h2 ref={revealTitle}>
          Some Projects I’ve Built
        </h2>
  
        <StyledProjectsGrid>
          {featuredProjectsData.map((project, i) => {
              const { externalLinks, title, tech, description, coverImage } = project;
  
              return (
                <StyledProject key={i} ref={el => el !== null && (revealProjects.current[i] = el)}>
                  <div className="project-content">
                    <div>
                      <p className="project-overline">Featured Project</p>
  
                      <h3 className="project-title">
                        <a href={externalLinks.length ? externalLinks[0].url : undefined} target="_blank" rel="noopener noreferrer">{title}</a>
                      </h3>
  
                      <div className="project-description">
                        {description}
                      </div>
  
                      {tech.length && (
                        <ul className="project-tech-list">
                          {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      )}
  
                      <div className="project-links">
                        {externalLinks.map(({ type, url }, i) => (
                            <a key={i} href={url} aria-label="type" target="_blank" rel="noopener noreferrer" className="external">
                                <Icon name={type as IconName} />
                            </a>
                        ))}
                      </div>
                    </div>
                  </div>
  
                  <div className="project-image">
                    <a href={externalLinks.length ? externalLinks[0].url : undefined} target="_blank" rel="noopener noreferrer">
                      <Image src={coverImage.url} height={coverImage.height} width={coverImage.width} alt={`${title} Cover Image`} className="img" />
                      {/* <Image src={coverImage.url} alt={`${title} Cover Image`} /> */}
                    </a>
                  </div>
                </StyledProject>
              );
            })}
        </StyledProjectsGrid>
      </StyledProjectsSection>
    );
  };
  
  export default FeaturedProjects;