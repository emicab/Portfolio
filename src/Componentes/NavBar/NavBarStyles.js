import styled from "styled-components";
import {colours} from "../Colours";

export const NavStyled = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: ${colours.colorFondo};
    border-bottom: 2px solid ${colours.colorPrimario};
    z-index: 1000;
`;

export const Logo = styled.img`
    margin-top: 10px;
    margin-left: 30px;
    width: 200px;
    fill: ${colours.colorSecundario};
    cursor: pointer;
`;

export const Ul = styled.ul`
    width: 700px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    list-style-type: none;
    padding: 0;
    color: ${colours.colorPrimario}
`;

export const Li = styled.li`
    cursor: pointer;
    color: ${colours.colorPrimario};
    text-decoration: none;
    font-size: 20px;
    padding: 5px;
    transition: .2s ease-out;
    &:hover{
        background-color: ${colours.colorSecundario};
    }
`;

