import React, { useEffect } from 'react'
import styles from './Home.module.css';
import { setup } from './HomeSetup';

function Home() {
  // FIXME: disgusting old JS hack
  useEffect(() => {
    setup();
  })

  function onClick(e) {
    e.preventDefault();
    let zoom = e.target.cloneNode(true);
    let rect = e.target.getBoundingClientRect();

    e.target.style.opacity = 0;

    // TODO: fix zooming text alignment (seems just a little off)
    // create zooming text
    zoom.className = styles.item;
    zoom.style.position = "fixed";
    zoom.style.whiteSpace = "nowrap";
    zoom.style.left = (rect.left + rect.width / 2) + "px";
    zoom.style.top = "40%";
    zoom.style.transform = "translate(-50%, -50%)";
    zoom.style.animation = `${styles.zoom} 3.5s forwards`;
    
    // hide items, fade background
    for (let x of e.target.parentNode.childNodes ) { 
      x.style.animation = `${styles.fade_out} 2s forwards`; 
    }

    let home = document.getElementById(styles.home);

    home.style.animation = `${styles.white_out} 3s forwards`;
    
    // redirect post-animation
    zoom.addEventListener("animationend", () => {
      window.location.href = zoom.getAttribute("href");
    });

    home.appendChild(zoom);
  }

  const unreleased = `${styles.item} ${styles.unreleased}`

  return <main id={styles.home}>
    <div id={styles.menu}>
      <a className={styles.item} href={"./movies"} onClick={onClick}>Movies</a>
      <a className={styles.item} href={"./photos"} onClick={onClick}>Photography</a>
      <a className={styles.item} href={"./music"} onClick={onClick}>Music Criticism</a>
      <a className={unreleased} href={"/"} disabled>Short Stories</a>
      <a className={unreleased} href={"/"}>Radio Shows</a>
      <a className={unreleased} href={"/"}>Screenplays</a>
      <a className={unreleased} href={"/"}>Music Videos</a>
    </div>
        
    <footer id={styles.footer}>
      <div>Created by</div>
      <div>Max Berengaut, Joshua Devine</div>
    </footer>
  </main>
}

export default Home