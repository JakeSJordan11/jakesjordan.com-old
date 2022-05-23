import type { LinksFunction } from "@remix-run/node";
import { Link, NavLink } from "@remix-run/react";
import React from "react";
import styles from "~/styles/routes/index.css";
import jakesjordan from "~/../public/images/jakesjordan.png";
import resume from "~/../public/jakesjordan resume.png";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
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
        </nav>
        <div data-welcome>
          <h1>Hey,</h1>
          <p>I'm Jake</p>
        </div>
        <figure data-profile-picture>
          <img src={jakesjordan} alt="jake jordan smiling in black and white" />
        </figure>
        <div data-quick-introduction>
          <p>a software devloper, musician and creator</p>
        </div>
      </header>
      <main>
        <section data-projects>
          <h1>Projects</h1>
          <div data-cards>
            <article data-card>
              <header data-card-title>
                <h2>RVNE</h2>
              </header>
              <figure data-card-image>
                <img alt="" />
              </figure>
              <div data-card-content>
                <p>a parametric flow based programing tool on the web</p>
              </div>
            </article>
            <article data-card>
              <header data-card-title>
                <h2>Audioseium</h2>
              </header>
              <figure data-card-image>
                <img alt="" />
              </figure>
              <div data-content>
                <p>a library of all my personal music</p>
              </div>
            </article>
            <article data-card>
              <header data-card-title>
                <h2>personal site</h2>
              </header>
              <figure data-card-image>
                <img alt="" />
              </figure>
              <div data-content>
                <p>my website showcasing my projects and interests</p>
              </div>
            </article>
            <article data-card>
              <header data-card-title>
                <h2>mobile project</h2>
              </header>
              <figure data-card-image>
                <img alt="" />
              </figure>
              <div data-content>
                <p>options: react native design system, plaid api project</p>
              </div>
            </article>
          </div>
          <figure data-resume>
            <img src={resume} alt="jake's resume"></img>
          </figure>
        </section>
        <footer>footer</footer>
      </main>
    </React.Fragment>
  );
}
