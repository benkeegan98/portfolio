import styled, { css } from "styled-components";

interface TextProps {
    size?: number,
    color?: string,
    padding?: number | {
        top?: number,
        bottom?: number,
        left?: number,
        right?: number
    },
    paddingY?: number,
    paddingX?: number,
    align?: "center" | "right" | "left",
    onClick?: React.MouseEventHandler<HTMLSpanElement>
}

const Text = styled.span<TextProps>`
    font-size: ${props => `${props.size}px` || '12px'};
    font-family: Verdana, sans-serif;
    text-align: ${props => props.align || "left"};
    color: ${props => props.color};
    padding: ${props => props.padding ? 
        typeof props.padding === "number" ? 
            `${props.padding}px`
            :
            `${props.padding.top || 0}px ${props.padding.right || 0}px ${props.padding.bottom || 0}px ${props.padding.left || 0}px` 
        : 
        `${props.paddingY || 0}px ${props.paddingX || 0}px`
    };

    ${props => props.onClick && css`
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    `}
`

export default Text;