import styles from "./cardWrapper.module.css";
import Card from "../card/Card";
import FilterButton from "../../buttons/filterButton/FilterButton";
import LikeButton from "../../buttons/likeButton/LikeButton";
import DeleteButton from "../../buttons/deleteButton/DeleteButton";
import { useGetCardsQuery } from "../../../services/cardsApi";
import { useState, useEffect } from "react";

const CardWrapper = () => {
  const { data: cards, isLoading, error } = useGetCardsQuery();
  const [cardList, setCardList] = useState([]);
  const [likedCards, setLikedCards] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (cards && cards.data && cards.data.memes) {
      setCardList(cards.data.memes);
    }
  }, [cards]);

  const handleRemove = (id) => {
    setCardList(cardList.filter((item) => item.id !== id));
  };

  const handleLike = (id) => {
    setLikedCards((prevLikedCards) =>
      prevLikedCards.includes(id)
        ? prevLikedCards.filter((cardId) => cardId !== id)
        : [...prevLikedCards, id]
    );
  };

  const filterLikedCards = () => {
    return cardList.filter((card) => likedCards.includes(card.id));
  };

  if (isLoading) {
    return <div className={styles.loader}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Произошла ошибка</div>;
  }

  return (
    <div>
      <FilterButton
        onClick={() => {
          const newIsFiltered = !isFiltered;
          setIsFiltered(newIsFiltered);
          setCardList(!newIsFiltered ? cards.data.memes : filterLikedCards());
        }}
      />
      <div className={styles.wrapper}>
        {cardList.map((item) => (
          <div className={styles.cards} key={item.id}>
            <Card text={item.name} image={item.url} />
            <LikeButton
              isLiked={likedCards.includes(item.id)}
              onClick={() => handleLike(item.id)}
            />
            <DeleteButton
              onClick={() => {
                handleRemove(item.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
