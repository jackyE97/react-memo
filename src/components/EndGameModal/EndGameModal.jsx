import styles from "./EndGameModal.module.css";
import { Button } from "../Button/Button";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useContext } from "react";
import { EasyModeContext } from "../../context/context";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick }) {

  const { easy } = useContext(EasyModeContext);

 const title = isWon ? `${easy? 'Вы выиграли' : 'Вы попали на Лидерборд!'}` : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";


  return (
    <form action="" onSubmit={isWon && !easy}>
    <div className={styles.modal}>
    <img className={styles.image} src={imgSrc} alt={imgAlt} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>Затраченное время:</p>
        <div className={styles.time}>
          {gameDurationMinutes.toString().padStart("2", "0")}:
          {gameDurationSeconds.toString().padStart("2", "0")}
        </div>
        <Button onClick={onClick}>Начать сначала</Button>
    </div>
  </form>
  );
}
