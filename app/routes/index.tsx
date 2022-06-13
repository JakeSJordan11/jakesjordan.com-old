// import { Link } from "@remix-run/react";
import React from "react";
import jakesjordan from "~/../public/assets/jakesjordan.png";
import resume from "~/../public/assets/Jacob Jordan Resume.png";
import audioseiumLogo from "~/../public/assets/audioseium.svg";
import rvneLogo from "~/../public/assets/abstract 2.png";
import modelingLogo from "~/../public/assets/abstract 1.png";
import jakeLogo from "~/../public/assets/jakesjordan.svg";
import styles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <React.Fragment>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="#projects">Projects</Link>
          </li>

          <li>
            <Link to="#about">about me</Link>
          </li>

          <li>
            <Link to="#resume">Resume</Link>
          </li>
        </ul>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav> */}

      <main>
        <section>
          <p>Hey,</p>
          <p>I'm Jake</p>

          <img src={jakesjordan} alt="jake jordan smiling" />

          <p>software devloper</p>
          <p>musician </p>
          <p>creator</p>
        </section>

        <section>
          <header>
            <h1>Projects</h1>
          </header>

          <article>
            <header>
              <h2>RVNE</h2>
            </header>

            <img src={rvneLogo} alt="" />
            <p>a parametric flow based programing tool on the web</p>
          </article>

          <article>
            <header>
              <h2>Audioseium</h2>
            </header>

            <img src={audioseiumLogo} alt="" />
            <p>a library of my personal music</p>
          </article>

          <article>
            <header>
              <h2>Personal Site</h2>
            </header>

            <img src={jakeLogo} alt="" />
            <p>my website showcasing my projects and interests</p>
          </article>
        </section>

        <section>
          <header>
            <h1>Interests</h1>
          </header>

          <article>
            <header>
              <h2>3D Art</h2>
            </header>

            <img src={modelingLogo} alt="" />
          </article>

          <article>
            <header>
              <h2>Game Design</h2>
            </header>

            <img src={modelingLogo} alt="" />
          </article>
        </section>

        <section>
          <header>
            <h1>Resume</h1>
          </header>

          <img src={resume} alt="jake's resume" />
        </section>
      </main>
    </React.Fragment>
  );
}
