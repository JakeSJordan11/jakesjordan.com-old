import React from "react";
import jakesjordan from "~/../public/assets/jakesjordan.png";
import resume from "~/../public/assets/Jacob Jordan Resume.png";
import audioseiumLogo from "~/../public/assets/audioseium.svg";
import rvneLogo from "~/../public/assets/rvne.png";
import artLogo from "~/../public/assets/3dart.png";
import jakeLogo from "~/../public/assets/jakesjordan.svg";
import styles from "~/styles/routes/index.css";
import gameLogo from "~/../public/assets/shellySpace.jpg";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <React.Fragment>
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
                an audio library filled with all of my musical works
              </p>
            </article>

            <article className="card">
              <header className="card__header">
                <h2>jakesjordan.com</h2>
              </header>

              <img className="card__image" src={jakeLogo} alt="" />
              <p className="card__information">
                a website introducing myself and showcasing what I enjoy working
                on
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

              <img className="card__image" src={artLogo} alt="" />
            </article>

            <article className="card">
              <header className="card__header">
                <h2>Game Design</h2>
              </header>

              <img className="card__image" src={gameLogo} alt="" />
            </article>
          </div>
        </section>

        <section>
          <header className="section__header">
            <h1>Resume</h1>
          </header>

          <img className="resume__image" src={resume} alt="jake's resume" />
        </section>
      </main>
    </React.Fragment>
  );
}
