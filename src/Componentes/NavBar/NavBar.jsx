import React from "react";
import { Link } from "react-scroll";
import {NavStyled, Logo, Ul, Li} from './NavBarStyles'

const NavBar = () => {
    return (
        <NavStyled>
            <Link to='Home' spy={true} smooth={true} offset={0} duration={500} delay={600}>
                <Logo src='./assets/emidevLogo.svg' alt='' />
            </Link>
            <Ul>
                <Link
                    to='Habilidades'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    delay={600}
                >
                    <Li>Habilidades</Li>
                </Link>
                <Link
                    to='SobreMi'
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                    delay={1000}
                >
                    <Li>Sobre mí</Li>
                </Link>
                <Link
                    to='Proyectos'
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                    delay={1000}
                >
                    <Li>Proyectos</Li>
                </Link>
                <Link
                    to='Contacto'
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                    delay={1000}
                >
                    <Li>Contactarme</Li>
                </Link>
            </Ul>
        </NavStyled>
    );
};

export default NavBar;
