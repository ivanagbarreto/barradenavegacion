import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to my site</h1>
      <p>This is the home page</p>
    </div>
  );
};

export default Home;
