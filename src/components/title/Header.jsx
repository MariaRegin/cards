import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My memes collection</h1>
    </div>
  );
}
