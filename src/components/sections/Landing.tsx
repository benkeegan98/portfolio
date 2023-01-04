import styled from "styled-components";
import Text from "../Text";
import Container from "../Container";
import { BLUE, WHITE } from "../../styles/colors";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const StyledLandingSection = styled.section`
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    height: 100vh;
    padding: 0;

    /* @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
        height: auto;
    } */

    /* h1 {
        margin: 0 0 30px 4px;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h3 {
        margin-top: 5px;
        line-height: 0.9;
    }
    */

    p {
        font-family: Verdana, sans-serif;
        margin: 20px 0 0;
        max-width: 540px;
    } 
`

const Landing = () => {
    const one = <Text color={BLUE} size={150} paddingY={10}>Ben Keegan</Text>;
    const two = (
        <Container paddingX={10}>
            <Text color={WHITE} size={70}>Software Engineer</Text>
        </Container>
    );

    const three = (
        <Container paddingX={10} paddingY={30} maxWidth="600px">
            <Text>
                Full stack developer with over 2 years experience designing, 
                building, and deploying applications for web and mobile
            </Text>
        </Container>
    );

    const items = [one, two, three];

    return (
        <StyledLandingSection id="landing">
            <TransitionGroup component={null}>
                {items.map((item, i) => (
                    <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                        <div style={{ transitionDelay: `${(i + 1)}00ms` }}>{item}</div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </StyledLandingSection>
      );
}

export default Landing;