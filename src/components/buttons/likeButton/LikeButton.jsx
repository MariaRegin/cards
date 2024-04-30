import styles from "./likeButton.module.css";
import { ReactComponent as Like } from "../../../icons/like.svg";

const LikeButton = ({ isLiked, onClick }) => {
  return (
    <button
      className={isLiked ? styles.clicked : styles.button}
      onClick={onClick}
    >
      <Like style={{ height: "26px", width: "26px" }} />
    </button>
  );
};

export default LikeButton;
