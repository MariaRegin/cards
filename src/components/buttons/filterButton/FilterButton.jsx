import styles from "./filterButton.module.css";

const FilterButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Показать любимые
    </button>
  );
};

export default FilterButton;
