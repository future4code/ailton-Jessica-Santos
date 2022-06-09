import React from "react";
import "./styles.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import Endereço from "./components/Endereço/Endereço";
import fotinha from "./components/Img/fotinha.jpeg";
import email from "./components/Img/email.png";
import endereco from "./components/Img/endereco.png";
import setinha from "./components/Img/setinha.png";
import professora from "./components/Img/professora.png";
import Aranha from "./components/Img/Aranha.png";
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={fotinha}
          nome="Jéssica Sampaio"
          descricao="Oi, eu sou a Jéssica. Sou aluna da Labenu. Adoro cozinhar, ler, assistir séries e jogar palavra cruzada."
        />

        <ImagemButton imagem={setinha} texto="Ver mais" />
      </div>
      <div className="pequenocard-section-container">
        <CardPequeno
          imagem={email}
          nomeemail=" Email: "
          email=" sampaioaranha@hotmail.com"
        />
      </div>

      {
        <div className="">
          <Endereço
            imagem={endereco}
            nomeendereço="Endereço: "
            endereço="Rua Felipe Cardoso, 1671- Santa cruz- RJ"
          />
        </div>
      }
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={professora}
          nome="Professora"
          descricao="Sou professora de educação infantil. É uma honra fazer uma pequena parte do crescimento dos pequenos."
        />

        <CardGrande
          imagem={Aranha}
          nome="Aranha Designer"
          descricao="Sou proprietária da Aranha Designer, sempre me aventurei pelo mundo digital e faço com muito amor."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto1="Facebook "
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
