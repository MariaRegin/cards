import React from "react";
import styles from "./card.module.css";

const Card = ({ text, image }) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <img className={styles.image} src={image} alt="Список мемов"></img>
    </div>
  );
};

export default Card;
