import styles from "./css/home.module.css";
import AreaSection from "./Section_typeA";

function Home() {
  return (
    <div className={styles.top_container}>
      <div className={styles.header_area}></div>
      <div className={styles.hero_area}></div>
      <AreaSection />
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.footer_area}></div>
    </div>
  );
}

export default Home;