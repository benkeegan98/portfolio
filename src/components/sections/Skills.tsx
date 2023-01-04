import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Text from '../Text';
import { srConfig } from '../../utils/scrollReveal';
import { BLUE, GREEN } from '../../styles/colors';
import ProgressBar from '../ProgressBar';
import skillData from '../../config/skillData';

const StyledSkillsSection = styled.section`
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
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
    }
`


const Skills = () => {

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
      <StyledSkillsSection id="skills" ref={revealContainer}>
        <h2>Skills</h2>
  
        <div className="inner">
          <Container>
              <Text size={20} paddingY={10}>Languages</Text>
              {skillData.languages.map(({ name, value}, i) => (
                <Container key={i} paddingY={3}>
                    <Text>{name}</Text>
                    <ProgressBar color={BLUE} value={value} />
                </Container>
              ))}
              
              
          </Container>
          <Container>
              <Text size={20} paddingY={10}>Frontend</Text>
              {skillData.frontend.map(({ name, value}, i) => (
                <Container key={i} paddingY={3}>
                    <Text>{name}</Text>
                    <ProgressBar color={"yellow"} value={value} />
                </Container>
              ))}
          </Container>
          <Container>
              <Text size={20}paddingY={10}>Backend</Text>
              {skillData.backend.map(({ name, value}, i) => (
                <Container key={i} paddingY={3}>
                    <Text>{name}</Text>
                    <ProgressBar color={"pink"} value={value} />
                </Container>
              ))}
          </Container>
          <Container>
              <Text size={20} paddingY={10}>Tools</Text>
              {skillData.tools.map(({ name, value}, i) => (
                <Container key={i} paddingY={3}>
                    <Text>{name}</Text>
                    <ProgressBar color={GREEN} value={value} />
                </Container>
              ))}
          </Container>
  
          
        </div>
      </StyledSkillsSection>
    );
};
  
export default Skills;