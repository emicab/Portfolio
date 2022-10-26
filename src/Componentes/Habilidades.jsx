import React from "react";
import "./Componentes.css";
import {
    Container,
    ContainerText,
    Titulo,
    TextSpan,
    Subrayado,
} from "./StylesComponents";

const Habilidades = () => {
    return (
        <Container bg='white' id='Habilidades'>
            <ContainerText>
                <Titulo>Habilidades:{"{"}</Titulo>
                <Subrayado left='-570px' top='-40px' width='420px'></Subrayado>
                <TextSpan align='left'>Frontend:{"{"} </TextSpan>
                	<TextSpan align='left' ml='30px'>
                	    'Html', 'Css', 'JavaScript': {"["}'ReactJs', 'ThreeJs'{"]"}
                	</TextSpan>
                <TextSpan align='left'>{"}"} </TextSpan>
                <TextSpan align='left'>Diseño:{"{"} </TextSpan>
                	<TextSpan align='left'>'Adobe Illustrator', 'Figma'</TextSpan>
                <TextSpan align='left'>{"}"} </TextSpan>
                <TextSpan align='left'>3D:{"{"} </TextSpan>
                	<TextSpan align='left'>'Blender'</TextSpan>
                <Titulo align='left'>{"}"} </Titulo>
            </ContainerText>
        </Container>
    );
};

export default Habilidades;
