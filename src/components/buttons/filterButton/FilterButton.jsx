import styles from "./filterButton.module.css";

const FilterButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Show favorites
    </button>
  );
};

export default FilterButton;
