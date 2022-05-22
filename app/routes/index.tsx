import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React from "react";
import styles from "~/styles/routes/index.css";

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function Index() {
  return (
    <React.Fragment>
      <header>
        <figure>
          <img src={'/images/jakesjordan.png'} alt="jake" />
        </figure>
        <nav>
          <Link to='#projects'>Projects</Link>
          <Link to='#resume'>Resume</Link>
          <Link to='#contact'>contact</Link>
        </nav >
      </header>
      <main>
        <h1>Welcome</h1>
        <h2>My name is Jake Jordan</h2>
        <h3>I'm a software developer currently living in Utah</h3>
        <p>
          I come from a music background in the greater Los Angelos area. Having started and played in an indie pop/rock band for 8 years with my childhood friend. Durring a difficult time in my life and music carrer I was given an invitation to make music for a video game. As I began learning the audio middleware I was eager to learn more about how the game was being made. I was quickly taken under the wing of the developer who became my mentor and is now a dear friend. My bond with my friends is great and I am loved by those around me. Those that understand my weeknesses and my strengths. Music and Programming have played pivitol roles in my life and without them I do not know where I would be.
        </p>
        <h3>
          Thank you for checking out my work!
        </h3>
        <p>
          Feel free to look around and reach out if you like what I’m doing.
        </p>

        <section>
          <ol>

            <li>Personal Site Card</li>
            <li>RVNE Card</li>
            <li>Mobile Project Card</li>
          </ol>
        </section>

        <section>
          <div>resume</div>
        </section>
      </main>
      <footer>
        <ul>
          <li>contact info</li>
          <li>github</li>
          <li>email</li>
        </ul>
      </footer>
    </React.Fragment>
  )
}
