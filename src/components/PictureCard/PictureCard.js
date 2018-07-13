import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
      <button onClick={() =>props.checkScore(props.id)}><img className="img-container" alt={props.name} src={props.image} /></button>   
);
  
export default PictureCard;