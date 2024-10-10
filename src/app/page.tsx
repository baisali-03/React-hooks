import styles from "./page.module.css";

export default function Home() {
  const cardNames = [
    "usePrevious()", "Card Two", "Card Three", "Card Four",
    "Card Five", "Card Six", "Card Seven", "Card Eight",
    "Card Nine", "Card Ten", "Card Eleven", "Card Twelve",
    "Card Thirteen", "Card Fourteen", "Card Fifteen", "Card Sixteen"
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.heading}>React Hooks</h2>

        <div className={styles.cardContainer}>
          {cardNames.map((name, index) => ( 
            <div key={index} className={styles.card}>
              <h3>{name}</h3> 
              <p>Content for {name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
