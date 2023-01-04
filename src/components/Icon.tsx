import React from "react";
import { FaGithub, FaLinkedin, FaGooglePlay, FaRegFolder } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { GrAppleAppStore } from "react-icons/gr";
import styled, { css } from "styled-components";
import Container from "./Container";

export type IconName = "email" | "github" | "linkedin" | "appstore" | "playstore" | "external" | "folder"; 

export interface IconProps {
    name: IconName;
    size?: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface IconContainerProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const iconMap = {
    github: FaGithub,
    email: IoMail,
    linkedin: FaLinkedin,
    appstore: GrAppleAppStore,
    playstore: FaGooglePlay,
    external: FiExternalLink,
    folder: FaRegFolder,
};

const StyledIconContainer = styled.div<IconContainerProps>`
   ${props => props.onClick ?
        css`
            &:hover {
                svg {
                    cursor: pointer;
                    transition: all .2s ease-in-out;
                    transform: scale(1.2);
                }
            }
        `
    : ""};
`;

const Icon = ({ name, size, onClick }: IconProps) => {
    const MyIcon = iconMap[name];
  
    return (
        <StyledIconContainer onClick={onClick}>
            <MyIcon size={size || 20}/>
        </StyledIconContainer>
    );
}

export default Icon;