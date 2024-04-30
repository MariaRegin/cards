import styles from "./deleteButton.module.css";
import { ReactComponent as Delete } from "../../../icons/delete.svg";

const DeleteButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Delete style={{ height: "26px", width: "26px" }} />
    </button>
  );
};

export default DeleteButton;
