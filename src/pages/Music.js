import React, { Fragment, useState, useEffect } from 'react'
import { setup } from './MusicSetup'
import { loadMusic } from '../content.js'
import styles from './Music.module.css'

function Navigation() {
  useEffect(() => {
    // TODO: replace this with actual React code
    setup();
  })

  return <Fragment>
    <div id={styles.navigation}>
      <a href="#175">175</a>
      <a href="#150">150</a>
      <a href="#125">125</a>
      <a href="#100">100</a>
      <a href="#75">75</a>
      <a href="#50">50</a>
      <a href="#25">25</a>
    </div>

    <div id={styles.marker}></div>
  </Fragment>
}

function Playlists() {
  let [show, setShow] = useState(false);

  const links = {
    spotify: "https://open.spotify.com/playlist/3LcAfMi9Zxi55KWTbcJ5Tk?si=3744cc20514c4c66",
    apple: "https://music.apple.com/us/playlist/175-songs-of-the-decade-2010s/pl.u-pMylDXlF495PNZG",
    soundcloud: "https://soundcloud.com/1park/sets/175-songs-of-the-decade-2010s",
    youtube: "https://youtube.com/playlist?list=PL8LITKOYFO6YM5FScTMuEwe2QpQ3btezb"
  }

  return <div id={styles.playlists} onMouseLeave={() => setShow(false)}>
    <div id={styles.playlists_trigger} onMouseOver={() => setShow(true)}>
      ♫
    </div>
    {show && <Fragment>
      <a href={links["spotify"]} style={{ color: "#1DB954" }}>
        Spotify (80%)
      </a>
      <a href={links["apple"]} style={{ color: "#f94c57" }}>
        Apple Music (93%)
      </a>
      <a href={links["soundcloud"]} style={{ color: "#ff7700" }}>
        SoundCloud (90%)
      </a>
      <a href={links["youtube"]} style={{ color: "#FF0000" }}>
        YouTube (100%)
      </a>
    </Fragment>}
  </div>

}

function Entry(data) {
  return <div key={data["title"]} id={data["title"]}>
    <hr className={styles.hr} />
    <h2 className={styles.number}>{data["title"]}</h2>
    <img
      className={data["align"] === "left" ? styles.left : styles.right }
      src={data["cover"]}
      alt={data.song}
    />
    <h2 className={styles.song}>
      {`${data["artist"]}: "${data["song"]}" (${data["year"]})`}
    </h2>
    <div>{data["write_up"]}</div>
    {data["lyric"] && 
      <div className={styles.lyric}>{`"${data["lyric"]}"`}</div>
    }
  </div>
}

// TODO: maybe zoom this to black? figure out transition
function Music() {
  let entries = loadMusic().sort((a, b) => b["key"] - a["key"])
  return <main id={styles.main}>
    <Navigation />

    <Playlists />

    <a href="./">
      <img id={styles.dog} src="./images/dog.png" alt="dog" />
    </a>

    <h1 id={styles.title} className={`${styles.center}`}>The Best 175 (Pop) Songs of the 2010s</h1>

    <div className={styles.divider}></div>

    <h4 className={`${styles.subtitle} ${styles.center}`}>
      By Max Berengaut<br />
      September 23, 2022 - Updated December 16, 2022 -
    </h4>

    <p>
      Over the course of the decade, (pop) music spread out across many
      genres, some new, some just reinterpretations of the old. The following
      works of art are the (pop) songs that have personally impacted me the
      most. Most of them I've found online or from friends. As a result, the
      list and the ranking are biased, because they are based on my opinions. I
      do not consider art to be at all related to the artist. In my mind once
      it's created, it's no longer theirs, it's the world's and I think it's
      unfair to judge art by anything other than its subjective quality. I
      believe that people, especially nowadays, need to separate their
      judgement of art from its political context. But I'm biased because
      that's the attitude that feels most beneficial to my problems. This
      article is inspired directly by Pitchfork, a fundamental part of the
      music landscape for decades, but for me it has only just been a personal
      celebration of the art of music.
    </p>

    {entries.map(Entry)}

  </main>
}

export default Music