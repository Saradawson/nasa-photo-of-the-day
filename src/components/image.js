import React from "react";
import styled from 'styled-components';

const PhotoWraper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1% 5%;
    font-size: 1em;
    margin: 1em;
    border: solid tomato;
    background: black;
    font-family: Arial, sans-serif;
    align-items: center;
    color: white; 
`;

const NasaIMG = styled.img`
    width: 100%;
    border: solid grey;
`;

const PhotoParagraph = styled.p`
    width: 95%;
    padding: 1%;
`;

const PhotoHeader = styled.h2`
    margin-bottom: 1%;
`;


const Image = (props) => {
    return (
        <PhotoWraper className="photo-wraper">
            <PhotoHeader>{props.image.title}</PhotoHeader>
            <p>{props.image.date}</p>
            <NasaIMG src={props.image.hdurl} />
            <PhotoParagraph>{props.image.explanation}</PhotoParagraph>
        </PhotoWraper>
    )
}

export default Image;