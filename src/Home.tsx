import React from 'react';
import styles from './components/Home.module.css';

const Home: React.FC = () => {
  return (
   
      <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a mi sitio</h1>
      <p>Este es el inicio.</p>
    </div>


    
  );
};

export default Home;