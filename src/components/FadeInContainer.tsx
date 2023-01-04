import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

const FadeInDiv = styled.div`
    transition: opacity 0.5s;  // add transition
    opacity: 0;  // start with zero opacity

    &.visible {
    opacity: 1;  // make fully visible when .visible class is added
    }
`;


const FadeInContainer = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        });
        if (divRef.current) observer.observe(divRef.current);
    }, []);
  
    return (
        <FadeInDiv ref={divRef} className={isVisible ? "visible" : ""}>
            {children}
        </FadeInDiv>
    );
};

export default FadeInContainer;