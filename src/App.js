import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Components/ImgInfo";
import Image from "./Components/ImgCard";
import "./App.css";

function App() {
  return (
    <div className = "App">
    <h1>Nasa Photo Of The Day</h1>

    
    <Image />
    </div>
  );
  
}

export default App;