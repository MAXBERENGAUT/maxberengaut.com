import React, { useEffect } from 'react'
import styles from './Home.module.css';
import { setup } from './HomeSetup';

function Home() {
  useEffect(() => {
    setup();
  })

  const unreleased = `${styles.item} ${styles.unreleased}`

  // TODO: make these into <a> or <button> for accessibility
  return <main id={styles.home}>
    <div id={styles.menu}>
      <div className={styles.item} href={"./movies"}>Movies</div>
      <div className={styles.item} href={"./photos"}>Photography</div>
      <div className={styles.item} href={"./music"}>Music Criticism</div>
      <div className={unreleased}>Short Stories</div>
      <div className={unreleased}>Radio Shows</div>
      <div className={unreleased}>Screenplays</div>
      <div className={unreleased}>Music Videos</div>
    </div>
        
    <footer id={styles.footer}>
      <div style={{ paddingBottom: "0.3em" }}>Created by</div>
      <div>Max Berengaut, Joshua Devine</div>
    </footer>
  </main>
}

export default Home