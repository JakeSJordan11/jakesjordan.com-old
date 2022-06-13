// import { Link } from "@remix-run/react";
import React from "react";
import jakesjordan from "~/../public/assets/jakesjordan.png";
import resume from "~/../public/assets/Jacob Jordan Resume.png";
import audioseiumLogo from "~/../public/assets/audioseium.svg";
import rvneLogo from "~/../public/assets/abstract 2.png";
import modelingLogo from "~/../public/assets/abstract 1.png";
import jakeLogo from "~/../public/assets/jakesjordan.svg";
import styles from "~/styles/routes/index.css";

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

      <main className="main">
        <section className="welcome">
          <div className="welcome__introduction">
            <p>Hey,</p>
            <p className="welcome__introduction--line2">I'm Jake</p>
          </div>

          <img
            className="welcome__image"
            src={jakesjordan}
            alt="jake jordan smiling"
          />

          <div className="welcome__information">
            <p className="welcome__attribute">software developer</p>
            <p className="welcome__attribute">musician </p>
            <p className="welcome__attribute">creator</p>
          </div>
        </section>

        <section className="section">
          <header className="section__header">
            <h1>Projects</h1>
          </header>

          <div className="cards">
            <article className="card">
              <header className="card__header">
                <h2>RVNE</h2>
              </header>

              <img className="card__image" src={rvneLogo} alt="" />
              <p className="card__information">
                a parametric flow based programing tool on the web
              </p>
            </article>

            <article className="card">
              <header className="card__header">
                <h2>Audioseium</h2>
              </header>

              <img className="card__image" src={audioseiumLogo} alt="" />
              <p className="card__information">
                a library of my personal music
              </p>
            </article>

            <article className="card">
              <header className="card__header">
                <h2>Personal Site</h2>
              </header>

              <img className="card__image" src={jakeLogo} alt="" />
              <p className="card__information">
                my website showcasing my projects and interests
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <header className="section__header">
            <h1>Interests</h1>
          </header>

          <div className="cards">
            <article className="card">
              <header className="card__header">
                <h2>3D Art</h2>
              </header>

              <img className="card__image" src={modelingLogo} alt="" />
            </article>

            <article className="card">
              <header className="card__header">
                <h2>Game Design</h2>
              </header>

              <img className="card__image" src={modelingLogo} alt="" />
            </article>
          </div>
        </section>

        <section className="section">
          <header className="section__header">
            <h1>Resume</h1>
          </header>

          <img className="resume__image" src={resume} alt="jake's resume" />
        </section>
      </main>
    </React.Fragment>
  );
}
