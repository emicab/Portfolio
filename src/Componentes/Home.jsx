import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
    Container,
    ContainerText,
    TextMain,
    TextSpan,
    Subrayado,
    IconAnimate,
    ContainerTextMain,
} from "./StylesComponents";

const Home = () => {
    return (
        <Container id='Home'>
            <ContainerText>
                <TextSpan color="white" align='left'>Hola 👋🏻,</TextSpan>
                <ContainerTextMain>
                    <TextMain color='white'>Soy ‎</TextMain> 
                    <TextMain>Emiliano Cabanillas</TextMain>
                    <TextMain color="white">.</TextMain>
                </ContainerTextMain>
                <TextSpan color="white">Frontend Development</TextSpan>
                <Subrayado></Subrayado>
                    <IconAnimate icon={faChevronDown} />
            </ContainerText>
        </Container>
    );
};

export default Home;
