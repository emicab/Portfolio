import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colours } from "./Colours";
import { fonts } from "./fonts";

export const Container = styled.div`
    background-color: ${props => props.bg === 'white' 
        ? colours.colorPrimario 
        : colours.colorFondo};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    user-select: none;
`;
export const Anchor = styled.a`
    text-decoration: none;
    display: flex;
`
export const ContainerText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    z-index: 100;
`;

export const TextSpan = styled.h4`
    font-size: ${fonts.font40};
    color: ${props => props.color === 'white' 
        ? colours.colorPrimario 
        : colours.colorFondo};
    text-align: ${props => props.align === 'left' 
        ? 'left'
        : 'center'};
    font-weight: ${fonts.fontRegular};
    margin-left: ${props => props.ml || 0};
    z-index: 100;
    width: ${props => props.width || "100%"};
`;
export const ContainerTextMain = styled.div`
    display: flex;
`;

export const TextMain = styled.h2`
    display: inline-flex;
    color: ${props => props.color === 'white' 
        ? colours.colorPrimario 
        : colours.colorSecundario};
    font-size: ${fonts.fontPrincipal};
    margin-bottom: 20px;
    
`;

export const Subrayado = styled.span`
    width: ${props => props.width || "600px"};
    height: 10px;
    background-color: ${colours.colorSecundario};
    margin:0 auto;
    position: relative;
    top: ${props => props.top || "-20px"};
    left: ${props => props.left || "0"};
    z-index: 10;
`;

const swipe = keyframes`
    from{
        transform: translateY(0px);
    }
    to{
        transform: translateY(10px);
    }
`;
export const IconAnimate = styled(FontAwesomeIcon)`
    color: ${colours.colorPrimario};
    font-size: 40px;
    position: relative;
    bottom: ${props => props.bottom || "-200px"};
    animation: ${swipe} .8s infinite alternate;
`;

export const Icon = styled(FontAwesomeIcon)`
    width: 60px;
    height: 60px;
    padding: 5px;
    margin: 5px;
    background-color: ${colours.colorPrimario};
    color: ${colours.colorFondo};
    font-size: 50px;
    position: relative;
    bottom: ${props => props.bottom};
`;

export const Titulo = styled.h3`
    color: ${props => props.color === 'white' 
        ? colours.colorPrimario 
        : colours.colorFondo};
    font-weight: 'bold';
    font-size: ${fonts.fontBody};
    text-align: left;
    margin-bottom: 20px;
    z-index: 100;
`

