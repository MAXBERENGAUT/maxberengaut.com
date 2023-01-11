import React, { useState } from 'react'
import styles from './Movies.module.css';

// TODO: properly handle form submission
function Form() {
  const [required, setRequired] = useState(false);

  return <form className={`${styles.form} ${styles.reveal_on_hover}`} action="">
    <input className={styles.email} type="email" name="email" placeholder="Your email" required />
    <input className={styles.text} type="text" name="message" placeholder="Your message" required={required}/>
    <button 
      type="button" 
      onClick={(e) => { 
        if (!e.target.parentElement.checkValidity()) {
          e.target.parentElement.reportValidity();
          return;
        }
        
        setRequired(true);
        e.target.previousElementSibling.previousElementSibling.style.display = "none";
        e.target.style.display = "none";
        e.target.previousElementSibling.style.display = "inline";
        e.target.nextElementSibling.style.display = "inline";
      }}
    >
      Next
    </button>
    <button className={styles.submit}>Submit</button>
  </form>
}

function Movies() {
  return <main id={styles.main}>
    <a href="./"><img id={styles.dog} src="./images/dog.png" alt="dog"/></a>

    <h1 className={styles.title}>Three Crows in Charlottesville</h1>
    <p className={`${styles.summary} ${styles.reveal_on_hover}`}>
      Frankie (Jacob Mingle) has to solve three murders of government officials across a rugged desolate 
      Charlottesville landscape.  The clues point to a past he wants to forget, as he is stuck in the 
      aftermath of an oppressive pandemic which has left its survivors (Ray Ruhlman, Anna Balch, Max Berengaut) 
      desperate for something to believe in.
    </p>
    <div className={styles.featured}>
      <iframe 
        src="https://www.youtube.com/embed/iNAFJOrGyGI?rel=0" 
        title="Three Crows in Charlottesville" 
        frameBorder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>

    <div className={`${styles.credits} ${styles.reveal_on_hover}`}>
      <div><div>Directed by</div><div>Max Berengaut</div></div>
      <div><div>Written by</div><div>Max Berengaut</div></div>
      <div><div>Produced by</div><div>Max Berengaut</div></div>
      <div><div>Music by</div><div>Kerry Gionis</div></div>
    </div>
    <div className={styles.reveal_on_hover}>
      <br/>Cast:
      <br/>Jacob Mingle - Frankie
      <br/>Ray Ruhlman - Sammy
      <br/>Anna Balch - Samantha
      <br/>Max Berengaut - Nicky
      <br/>Featuring Cooper Grace as Cooper
      <br/>Mia Gualteri as Fiona
    </div>
    <div className={styles.spacer}></div>


    <h1 className={styles.title}>I Can't Go Home</h1>
    <p className={`${styles.summary} ${styles.reveal_on_hover}`}>
      After a simple robbery goes wrong, two teenage boys must find a safe 
      place to hide, only to find out their hiding place has secrets of its 
      own.
    </p>

    <div className={styles.featured}>
      <img src="./images/IMG_20220322_114008.jpg" alt="featured"/>
    </div>
    <div className={styles.reveal_on_hover}>Production: Saturday March 26, 2022</div>
    <div className={styles.reveal_on_hover}><br/>Reach out for the script or for help in the production:</div>
    <Form />
    <div className={styles.spacer}></div>


    <h1 className={styles.title}>Monticello Avenue</h1>
    <p className={`${styles.summary} ${styles.reveal_on_hover}`}>
      Two friends just out of High School wander aimlessly through the graduation parties of Charlottesville, 
      as their friends and family intersect and come in to play with one another.
    </p>
    <div className={styles.featured}>
      <img src="./images/201015000036070025.jpg" alt="featured"/>
    </div>
    <div className={styles.reveal_on_hover}>Production: Unknown</div>
    <div className={styles.reveal_on_hover}><br/>Reach out for the script or for help in the production:</div>
    <Form />
    <div className={styles.spacer}></div>
  </main>
}

export default Movies