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

    @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
        height: auto;
    }

    @media (max-width: 768px) {
        margin-top: 100px;
        width: 100vw;
    }

    h1 {
        font-size: 150px;
        font-weight: 400;
        color: ${BLUE};
        font-family: Verdana, sans-serif;

        @media (max-width: 768px) {
            font-size: 80px;
        }
    }

    h2 {
        font-size: 70px;
        font-weight: 400;
        color: ${WHITE};
        font-family: Verdana, sans-serif;
        padding: 10px;

        @media (max-width: 768px) {
            font-size: 50px;
        }
    }

    h3 {
        margin-top: 5px;
        line-height: 1.2;

        font-size: 20px;
        font-weight: 200;
        color: ${WHITE};
        font-family: Verdana, sans-serif;
        padding: 15px;
        max-width: 700px;

        @media (max-width: 768px) {
            max-width: 400px;
            font-size: 16px;
        }
    }
   

    p {
        font-family: Verdana, sans-serif;
        margin: 20px 0 0;
        max-width: 540px;
    } 
`

const Landing = () => {
    // const one = <Text color={BLUE} size={150} paddingY={10}>Ben Keegan</Text>;
    const one = <h1>Ben Keegan</h1>;
    const two = <h2>Software Engineer</h2>;
    const three = (
        <h3>
            Full stack developer with over 2 years experience designing, 
            building, and deploying applications for web and mobile
        </h3>
    );

    // const three = (
    //     <Container paddingX={10} paddingY={30} maxWidth="600px">
    //         <Text>
    //             Full stack developer with over 2 years experience designing, 
    //             building, and deploying applications for web and mobile
    //         </Text>
    //     </Container>
    // );

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