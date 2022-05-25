import { Link } from "@remix-run/react";
import React from "react";
import jakesjordan from "~/../public/assets/jakesjordan.png";
import resume from "~/../public/assets/jakesjordan resume.png";
import audioseiumLogo from "~/../public/assets/audioseium.svg";
import rvneLogo from "~/../public/assets/abstract 1.png";
import mobileLogo from "~/../public/assets/abstract 2.png";
import jakeLogo from "~/../public/assets/jakesjordan.svg";

export default function Index() {
  return (
    <React.Fragment>
      <header className="px-8 h-screen text-2xl">
        <nav className="pt-4">
          <div className="hidden flex-1 sm:justify-evenly md:flex">
            <Link to="/">Home</Link>
            <Link to="#projects">Projects</Link>
            <Link to="#about">about me</Link>
            <Link to="#resume">Resume</Link>
          </div>
          <div className="flex justify-end md:hidden">
            <button className="fixed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
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
          </div>
        </nav>
        <h1 className="text-3xl font-black">Hey,</h1>
        <p className="pl-4 font-medium">I'm Jake</p>
        <figure className="flex justify-center py-8">
          <img
            className="max-w-xs rounded-full"
            src={jakesjordan}
            alt="jake jordan smiling in black and white"
          />
        </figure>
        <div className="text-xl font-medium text-center">
          <p>software devloper</p>
          <p>musician </p>
          <p>creator</p>
        </div>
      </header>
      <main>
        <section className="flex flex-col justify-center pb-16">
          <header>
            <h2 className="absolute left-0 bottom-4 px-8 text-2xl font-medium border-b-4">
              Projects
            </h2>
          </header>
          <div className="px-12 space-y-32">
            <article className="px-8 rounded-2xl shadow-lg">
              <header className="py-4">
                <h3 className="text-xl font-bold text-center border-b-2">
                  RVNE
                </h3>
              </header>
              <figure>
                <img src={rvneLogo} alt=""></img>
              </figure>
              <footer className="py-4 text-xl text-center">
                a parametric flow based programing tool on the web
              </footer>
            </article>
            <article className="px-8 rounded-2xl shadow-lg">
              <header className="py-4">
                <h3 className="text-xl font-bold text-center border-b-2">
                  Audioseium
                </h3>
              </header>
              <figure>
                <img src={audioseiumLogo} alt=""></img>
              </figure>
              <footer className="py-4 text-xl text-center">
                a library of my personal music
              </footer>
            </article>
            <article className="px-8 rounded-2xl shadow-lg">
              <header className="py-4">
                <h3 className="text-xl font-bold text-center border-b-2">
                  Personal Site
                </h3>
              </header>
              <figure>
                <img src={jakeLogo} alt=""></img>
              </figure>
              <footer className="py-4 text-xl text-center">
                my website showcasing my projects and interests
              </footer>
            </article>
            <article className="px-8 rounded-2xl shadow-lg">
              <header className="py-4">
                <h3 className="text-xl font-bold text-center border-b-2">
                  Mobile Project
                </h3>
              </header>
              <figure>
                <img src={mobileLogo} alt=""></img>
              </figure>
              <footer className="py-4 text-xl text-center">
                options: react native design system, plaid api project
              </footer>
            </article>
          </div>
        </section>
        <section className="flex flex-col justify-center pb-32">
          <header className="pb-32">
            <h2 className="px-8 w-min text-2xl font-medium border-b-4">
              Interests
            </h2>
          </header>
          <div className="px-12 space-y-32">
            <article className="px-8 rounded-2xl shadow-lg">
              <header className="py-4">
                <h3 className="text-xl font-bold text-center border-b-2">
                  Blender
                </h3>
              </header>
              <figure className="">
                <img src={audioseiumLogo} alt=""></img>
              </figure>
              <footer className="py-4 text-xl text-center">3d Mo</footer>
            </article>
          </div>
        </section>
        <section>
          <h2 className="px-8 w-min text-2xl font-medium border-b-4">Resume</h2>
          <figure>
            <img src={resume} alt="jake's resume"></img>
          </figure>
        </section>
      </main>
    </React.Fragment>
  );
}
