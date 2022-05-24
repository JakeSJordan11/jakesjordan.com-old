import { Link } from "@remix-run/react";
import React from "react";
import jakesjordan from "~/../public/images/jakesjordan.png";
import resume from "~/../public/jakesjordan resume.png";
import logo from "~/../public/svg/Practice_logo.svg";

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
      <h2 className="absolute bottom-4 px-8 text-2xl font-medium border-b-4">
        Projects
      </h2>
      <main className="h-screen">
        <section className="flex flex-col justify-center px-12 pb-8 space-y-32">
          <article className="px-8 rounded-2xl shadow-lg">
            <header className="py-4">
              <h3 className="text-xl font-bold text-center border-b-2">RVNE</h3>
            </header>
            <figure className="">
              <img src={logo} alt=""></img>
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
            <figure className="">
              <img src={logo} alt=""></img>
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
            <figure className="">
              <img src={logo} alt=""></img>
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
            <figure className="">
              <img src={logo} alt=""></img>
            </figure>
            <footer className="py-4 text-xl text-center">
              options: react native design system, plaid api project
            </footer>
          </article>
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
