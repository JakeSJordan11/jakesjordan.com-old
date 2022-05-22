import type { LinksFunction } from "@remix-run/node";
import React from "react";
import styles from "~/styles/routes/index.css";

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function Index() {
  return (
    <React.Fragment>
      <header>
        <h1 data-welcome>Hey,</h1>
        <h2 data-name>I'm Jake</h2>
        <figure>
          <img src={'/images/jakesjordan.png'} alt="jake" />
        </figure>
        <h3 data-introduction>a software devloper, musician and creator</h3>
      </header>
      <main>
        <h4>
          I come from a music background in the greater Los Angelos area. Having started and played in an indie pop/rock band for 8 years with my childhood friend. Durring a difficult time in my life and music carrer I was given an invitation to make music for a video game. As I began learning the audio middleware I was eager to learn more about how the game was being made. I was quickly taken under the wing of the developer who became my mentor and is now a dear friend. My bond with my friends is great and I am loved by those around me. Those that understand my weeknesses and my strengths. Music and Programming have played pivitol roles in my life and without them I do not know where I would be.
        </h4>
        <h3>
          Thank you for checking out my work!
        </h3>
        <p>
          Feel free to look around and reach out if you like what I’m doing.
        </p>
      </main>
    </React.Fragment>
  )
}
