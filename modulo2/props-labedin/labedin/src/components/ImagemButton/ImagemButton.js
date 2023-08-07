import React from "react";
import "./ImagemButton.css";

function ImagemButton(props) {
  return (
    <div className="image-button-container">
      <img src={props.imagem} />
      <a href="https://www.facebook.com/Jess.Aranha">
        <p>{props.texto1}</p>{" "}
      </a>
      <a href="https://twitter.com/login?lang=pt">
        {" "}
        <p>{props.texto}</p>{" "}
      </a>
    </div>
  );
}

export default ImagemButton;
