import React from "react";
import "./Componentes.css";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    Container,
    ContainerText,
    Icon,
    Subrayado,
    TextSpan,
    Titulo,
    ContainerTextMain,
    Anchor,
} from "./StylesComponents";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Container id='SobreMi'>
            <ContainerText>
                <Titulo color='white'>Sobre mí:</Titulo>
                <Subrayado left='-540px' top='-40px' width='315px'></Subrayado>
                <TextSpan color='white' width='1300px'>
                    Tengo 30 años, de la ciudad de Córdoba, Argentina.
                    Apasionado por la tecnologia. La curiosidad me tiene en
                    constante aprendizaje.
                </TextSpan>
                <Titulo color='white'>Mis Redes:</Titulo>
                <Subrayado left='-520px' top='-40px' width='350px'></Subrayado>
                <Anchor href='https://www.linkedin.com/in/emiliano-dev/'>
                    <Icon icon={faLinkedinIn} />
                    <TextSpan align='left' color='white' width='1300px'>/emiliano-dev</TextSpan>
                </Anchor>
                <Anchor href='https://www.github.com/emicab'>
                    <Icon icon={faGithub} />
                    <TextSpan align='left' color='white' width='1300px'>
                        {" "}
                        /emicab
                    </TextSpan>
                </Anchor>
            </ContainerText>
        </Container>
    );
};

export default About;
