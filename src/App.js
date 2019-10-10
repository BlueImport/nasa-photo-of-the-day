import React from "react";
import Image from "./Components/ImgCard";
import "./App.css";
import styled from "styled-components";

const TitleH1 = styled.h1`
  font-size: 70px;
  color: gray;
  background-color: black;
  padding-left: 0%;
  padding-bottom: 3%;
  width: 75%;
  text-align: center;
  margin: auto;
  margin-top: 3%;
  border: 3px solid gray;
  box-shadow: 5px 5px 5px slategray;
  `

  const BorderP = styled.p`
  font-size: 12px;
  padding:2%;
  background-color: black;
  width: 75%;
  margin: auto;
  color: gray;
  align-text: center;
  border: 1.5px solid gray;
  box-shadow: 5px 5px 5px 0px slategray;
  `;

function App() {
  return (
    <div className = "App">
    <TitleH1>Nasa Photo Of The Day</TitleH1>

    <Image />

    <BorderP>Copyright Nasa 2019 | All Rights Reserved</BorderP>
    </div>
  );
  
}

export default App;