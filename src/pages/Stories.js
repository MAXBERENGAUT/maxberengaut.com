import React, { useEffect } from 'react'
import styles from './Stories.module.css';
import { setup } from './StoriesSetup';

function Stories() {
  // FIXME: disgusting old JS hack
  useEffect(() => {
    setup();
  })

  return <main id={styles.main}>
    <a href=".."><img id={styles.dog} alt="dog" src="../images/dog.png" /></a>

    <div className={styles.story_list}>
      <div className={styles.line}></div>

      <div className={styles.story}>
          <div className={styles.bullet}></div>
          <h1><a href="stories/the_electricians">
            The Electricians
          </a></h1>
      </div>
    </div>
  </main>
}

export default Stories