import React from "react";
import { Router } from "./routes/Router"
import { createGlobalStyle } from "styled-components";
import HomePage from "./pages/LoginPage"


const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    min-height: 100vh;
    background-color: lightblue;
  }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function App() {
const App = () => {
  return (
    <div>
      <GlobalStyle />
     <HomePage />
      <Router />
    </div>
  );
}}
export default App;