import React from "react"
import { Link } from "gatsby"

import Image from "../image"
import css from "./homePageContent.module.css"

const HomePageContent = () => {
  return (
    <div id={css.homePageContent}>
      <h1 id={css.mainHeader}>Hi, I'm Liz!</h1>
      <div id={css.mainImage}>
        <Image />
      </div>
      <h2 className={css.subHead}>
        I’m a freshly-minted software developer from the School of Code’s third
        cohort.
      </h2>
      <p className={css.contentP}>
        I studied history and archeology, which was about as useful as you'd
        imagine in my office jobs after that... I’m drawn to technology and
        development because I’ve always loved learning, challenges, and the
        occasional leap into the unknown – not to mention that coding is the
        closest thing to magic in real life!
      </p>
      <p className={css.contentP}>
        In 2019, I decided to follow my heart towards technology by learning to
        code, and I applied to the School of Code. By May 2020, my time as a
        bootcamper equipped me with the skills I needed for full-stack agile
        development and completely changed my life.
      </p>

      {/* TODO: uncomment links below when pages are made! */}
      {/* <Link to="/about-me/">More about me</Link> */}
      {/* <Link to="/projects/">See what I've made</Link> */}
      {/* <Link to="/contact-me/">Get in touch!</Link> */}

      {/* TODO: need to incorporate social logos/links on the landing page (somewhere fairly prominent) */}
    </div>
  )
}

export default HomePageContent
