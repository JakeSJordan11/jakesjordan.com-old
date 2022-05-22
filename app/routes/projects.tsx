import type { LinksFunction } from "@remix-run/node";
import React from "react";
import styles from "~/styles/routes/projects.css";

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function Projects() {
  return (
    <React.Fragment>
      <section>
        <ol>
          <li>Personal Site Card</li>
          <li>RVNE Card</li>
          <li>Mobile Project Card</li>
        </ol>
      </section>
    </React.Fragment>
  )
}
