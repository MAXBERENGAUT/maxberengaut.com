import React, { useEffect, useState, useRef } from 'react'
import { loadPhotos } from '../content';

import styles from './Photos.module.css';

// TODO: rename description to caption
// TODO: fix page title
// FIXME: MIGRATE OLD PHOTOS TO NEW PHOTOS FOLDER
function Photos() {
  const [content, setContent] = useState(null);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [robotState, setRobotState] = useState("neutral");
  const robotHovered = useRef(false);

  useEffect(() => {
    if (!content) {
      setContent(loadPhotos().sort(() => Math.random() - 0.5));
      return;
    }

    // Create an array of images to preload
    const images = Array.from({ length: 3 }, (_, i) => content[index + i + 1]);
    // Return an array of Image elements
    images.map((image) => {
      if (image.complete) return image;
      const img = new Image();
      img.src = image.image;
      img.decode().catch(() => { });
      return img;
    });

  }, [content, index])

  // TODO: change this to loading instead of null
  if (!content) return null;

  return (!content) ? null : (
    <main id={styles.main}>
      <a href="./">
        <img id={styles.dog} src="./images/dog.png" alt="dog" />
      </a>

      <div className={styles.robot_container}>
        { index < content.length - 1 ? (
          <img
            id={styles.robot}
            className={robotState === "clicked" ? styles.toggle : ""}
            style={robotState === "clicked" ? { cursor: "default" } : {}}
            src={`./images/robot_${robotState}.png`}
            alt="robot"
            onMouseOver={() => {
              robotHovered.current = true;
              if (robotState !== "clicked") setRobotState("hovered")
            }}
            onMouseLeave={() => {
              robotHovered.current = false;
              if (robotState !== "clicked") setRobotState("neutral")
            }}
            onClick={() => {
              if (robotState === "clicked") return;

              setShow(!show)
              setIndex(index + 1)
              setRobotState("clicked")
              setTimeout(() => {
                setRobotState(robotHovered.current ? "hovered" : "neutral")
              }, 6650)
            }}
          />
        ) : (
          // TODO: actually link back end to form
          <form id={styles.form} method="POST" target="">
            <input 
              className={styles.phone} 
              type="tel" name="phone" 
              placeholder="(###) ###-####" 
              pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}" 
              required 
            />
            <button>Submit</button>
          </form>
        )}
      </div>

      <div className={styles.featured}>
        <img 
          id={styles.img} 
          // className={`${styles.fade_in} ${show ? styles.show : ""}`}
          src={content[index].image} 
          alt="" 
        />
      </div>
      <p id={styles.metadata}>
        <span>{content[index].date}</span>
        <span id={styles.location}>{content[index].location}</span>
      </p>
    </main>
  )
  
}

export default Photos