import React from "react";
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

    const NewH1 = styled.h1`
    font-size: 30px;
    margin-top:2%;
    `;

    const InfoP = styled.p`
    font-size: 16px;
    width: 75%;
    text-align: center;
    margin-left:12%;
    padding: 5%;
    border: 1.5px solid gray;
    `;

    const NewH3 = styled.h3`
    font-weight: bold;
    `

const ImgInfo = props => {
    return (
        <div className="main">
            <NewH1>{props.title}</NewH1>
            <NewH3>{props.day}</NewH3>
            <img src={props.image} alt="Space"/>
            <InfoP>{props.text}</InfoP>
        </div>
    )
}

export default ImgInfo; 