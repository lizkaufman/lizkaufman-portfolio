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
        In 2019, I decided to follow my heart towards technology by learning to
        code, and I applied to the School of Code. By May 2020, my time as a
        bootcamper equipped me with the skills I needed for full-stack agile
        development and completely changed my life.
      </p>
      <p className={css.contentP}>
        I’m drawn to technology and development because I’ve always loved
        learning, challenges, and the occasional leap into the unknown – not to
        mention that coding is the closest thing to magic in real life!
      </p>
      <div id={css.socials}>
        <a
          href="https://twitter.com/codingbumblebee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={css.socialsIcon}
            alt="link to my twitter"
            src="https://i.ibb.co/105SgWs/Twitter-2.png"
          />
        </a>
        <a
          href="https://github.com/lizkaufman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={css.socialsIcon}
            alt="link to my github"
            src="https://i.ibb.co/ynTDDFQ/Github-2.png"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/elizabeth-kaufman-a51bba26/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={css.socialsIcon}
            alt="link to my linkedin"
            src="https://i.ibb.co/dMzdXXR/Linkedin-2.png"
          />
        </a>
        <a
          href="https://medium.com/@lizkaufman92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={css.socialsIcon}
            alt="link to my medium blog"
            src="https://i.ibb.co/PMMdcxW/medium-icon-circle.png"
          />
        </a>
      </div>

      {/* TODO: uncomment links below when pages are made! */}
      {/* <Link to="/about-me/">More about me</Link> */}
      {/* <Link to="/portfolio/">See what I've made</Link> */}
      {/* <Link to="/contact-me/">Get in touch!</Link> */}
    </div>
  )
}

export default HomePageContent
