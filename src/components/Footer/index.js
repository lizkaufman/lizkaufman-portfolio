import React from "react"

import css from "./footer.module.css"

function Footer() {
  return (
    <footer id={css.footer}>
      <p id={css.copyright}>© {new Date().getFullYear()}, Liz Kaufman</p>

      <a
        href="https://twitter.com/codingbumblebee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={css.footerSocialIcon}
          alt="link to my twitter"
          src="https://i.ibb.co/cJw1VZt/transp-twitter.png"
        />
      </a>
      <a
        href="https://github.com/lizkaufman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={css.footerSocialIcon}
          alt="link to my github"
          src="https://i.ibb.co/hgW1VBh/transp-github-better.png"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/liz-kaufman/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={css.footerSocialIcon}
          alt="link to my linkedin"
          src="https://i.ibb.co/MMxKZ0T/transp-linked-in.png"
        />
      </a>
      <a
        href="https://medium.com/@lizkaufman92"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={css.footerSocialIcon}
          alt="link to my medium blog"
          src="https://i.ibb.co/PMMdcxW/medium-icon-circle.png"
        />
      </a>
    </footer>
  )
}

export default Footer
