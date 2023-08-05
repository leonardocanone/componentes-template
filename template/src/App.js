import React from "react";
import "./App.css";

import { Garagem } from "./components/Garagem";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


export default function App() {
  

  return (
    <div className="App">
     <Header/> 
     <h1>Aula - Componentes React</h1>
     <Garagem/>
     <Footer/>
    </div>
  );
}
