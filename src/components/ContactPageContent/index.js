import React from "react"

import css from "./contactPageContent.module.css"

//  TODO:component that integrates Twitter (newsfeed and/or tweet me button!)

function ContactPageContent() {
  return (
    <div id={css.contactPageContent}>
      <h1 style={{ fontFamily: "Roboto" }}>Want to get in touch?</h1>
      <p className={css.contactPageP}>
        I'm currently looking for my first role in tech, and I can't wait for an
        opportunity to use the skills and experience from the School of Code and
        keep learning! If you have an opportunity and you'd like an eager
        developer hungry to take on new challenges, contact{" "}
        <a id={css.socEmail} href="mailto:hiring@schoolofcode.co.uk">
          hiring@schoolofcode.co.uk
        </a>
        .
      </p>
      <p className={css.contactPageP}>
        If you'd like to see more of what I'm up to in my tech journey, check
        out my socials below:
      </p>
      <a
        href="https://twitter.com/codingbumblebee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={css.social}>
          <img
            className={css.socialsIcon}
            alt="link to my twitter"
            src="https://i.ibb.co/cJw1VZt/transp-twitter.png"
          />
          <h3 className={css.socialsLink}>@codingbumblebee</h3>
        </div>
      </a>
      <a
        href="https://github.com/lizkaufman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={css.social}>
          <img
            className={css.socialsIcon}
            alt="link to my github"
            src="https://i.ibb.co/hgW1VBh/transp-github-better.png"
          />
          <h3 className={css.socialsLink}>@lizkaufman</h3>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/liz-kaufman/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={css.social}>
          <img
            className={css.socialsIcon}
            alt="link to my linkedin"
            src="https://i.ibb.co/MMxKZ0T/transp-linked-in.png"
          />
          <h3 className={css.socialsLink}>@liz-kaufman</h3>
        </div>
      </a>
      <a
        href="https://medium.com/@lizkaufman92"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={css.social}>
          <img
            className={css.socialsIcon}
            alt="link to my medium blog"
            src="https://i.ibb.co/PMMdcxW/medium-icon-circle.png"
          />
          <h3 className={css.socialsLink}>@lizkaufman92</h3>
        </div>
      </a>
    </div>
  )
}

export default ContactPageContent
