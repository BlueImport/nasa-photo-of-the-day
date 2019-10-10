import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgInfo from "./ImgInfo";
import styled from "styled-components";

const InfoImg = styled.img`
    width: 50%;
    height: 50%;
    padding:2%;
    background-color: white;
    border: 1px solid black;
    border-radius: 5%;
    margin-bottom: 2%;
    box-shadow: 5px 5px 5px slategray;
    `;

const ImgCard = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [explanation, setExplanation] = useState();

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=zEe8JdVzvWbwlbJTLRbPP6gyBXldLaRI3Cg08sPs')
            .then(response => {
                setTitle(response.data.title);
                setDate(response.data.date);
                setImage(response.data.url);
                setExplanation(response.data.explanation);
                console.log(response);
            });
    }, []);

    return (
        <div className="container">
            <ImgInfo title = {title} image = {image} day = {date} text = {explanation} /> 
            
        </div>
    )
}

export default ImgCard;  