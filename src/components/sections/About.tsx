import { useEffect, useRef } from "react";
import styled from "styled-components";
import Container from "../Container";
import Image from "../Image";
import Text from "../Text";
import { srConfig } from "../../utils/scrollReveal";
import { BLUE, BLUE_LIGHT_20, BLUE_LIGHT_80 } from "../../styles/colors";

const StyledAboutSection = styled.section`
    max-width: 900px;
    height: 100vh;
    margin: 0px auto;
    padding: 100px 0px;

    h2 {
        font-family: Verdana, sans-serif;
        font-size: 30px;
        color: ${BLUE};
        margin-bottom: 20px;
    }

    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;

        a {
            color: ${BLUE};
            text-decoration: none;
            font-family: Verdana, sans-serif;
        }

        a:hover {
            color: ${BLUE_LIGHT_20};
        }

        @media (max-width: 768px) {
            display: block;
        }
    }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: ${BLUE_LIGHT_80};

    :hover,
    :focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    img {
        height: 300px;
        width: 300px;
        position: relative;
        border-radius: var(--border-radius);
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        transition: .2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    
  }
`;

const About = () => {

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
    
    return (
      <StyledAboutSection id="about" ref={revealContainer}>
        <h2>About Me</h2>
  
        <div className="inner">
          <Container>
              <Text padding={{ bottom: 15}}>
                Hello! My name is Ben and I am a Software Engineer from Liverpool, England. My initial interest in coding stemmed from
                my longterm curiosity and desire to understand how things work. It wasn&apos;t until I took my first Computer Science class at Duke University
                that I realized just how much fun I had building software. Ever since, I have fallen in love with bringing ideas
                to life, designing and building digital experiences that leave a longlasting impression on everyone that uses them!
              </Text>
  
              <Text padding={{ bottom: 15}}>
                In my Senior Year at Duke, I had the privilege of co-founding a start-up,{' '}
                <a href="https://pathbreakerapp.com/" target="_blank" rel="noopener noreferrer">Pathbreaker</a>, a social travel-mapping platform. I moved to San Francisco 
                and spent 18 months designing and building full stack applications to bring Pathbreaker to life on {' '}
                <a href="https://pathbreaker.app/" target="_blank" rel="noopener noreferrer">web</a>, {' '}
                <a href="https://apps.apple.com/us/app/pathbreaker/id1615717375" target="_blank" rel="noopener noreferrer">iOS</a>, and {' '}
                <a href="https://play.google.com/store/apps/details?id=com.pathbreaker.app" target="_blank" rel="noopener noreferrer">Android</a>.
                Now, I am currently looking for Software Engineer roles in a highly collaborative working environment, where I can work with other 
                passionate and talented engineers and contribute to impactful work from day one.
              </Text>
  
              <Text>
                In my spare time, I love to build side projects, and have been recently working on a music recommendation generator application using the Spotify API and OpenAI GPT-3. 
                I&apos;m passionate about music and I have been delving into the world of sampling, trying my best to create J Dilla inspired hip hop beats!
                I&apos;m also a huge Liverpool FC fan, and despite being 8hrs behind in California, I never miss a game!
              </Text>
          </Container>
  
          <StyledPic>
            <div className="wrapper">
              <Image height={300} height={300} src={'/headshot2.jpeg'}/>
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>
    );
  };
  
  export default About;