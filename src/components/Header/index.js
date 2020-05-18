import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import HamburgerMenu from "react-hamburger-menu"
import { Drawer } from "antd"
import css from "./header.module.css"

function Header({ siteTitle }) {
  //state that controls burger menu icon:
  const [open, setOpen] = useState(false)
  //state that controls the actual menu the burger icon is linked to:
  const [menuShow, setMenuShow] = useState(false)

  function handleClick() {
    setOpen(!open)
    setMenuShow(!menuShow)
  }

  return (
    <header id={css.header}>
      <div id={css.headerContent}>
        <h1 style={{ margin: 0 }}>
          <Link id={css.siteTitle} to="/">
            {siteTitle}
          </Link>
        </h1>
        <div id={css.hamburgerIcon}>
          <HamburgerMenu
            isOpen={open}
            menuClicked={handleClick}
            width={50}
            height={25}
            strokeWidth={6}
            rotate={0}
            color="#3a3b3c"
            borderRadius={50}
            animationDuration={0.5}
          />
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={handleClick}
        visible={menuShow}
        mask={true}
        drawerStyle={{
          fontFamily: "Roboto",
        }}
        headerStyle={{
          fontFamily: "Roboto",
          fontSize: "20px",
          color: "#3a3b3c",
          fontWeight: "bolder",
          paddingTop: "20px",
          background: `#eccf59`,
        }}
      >
        <div id={css.headerMenu}>
          <a href="/" className={css.headerLink}>
            Home
          </a>
          <a href="/about-me" className={css.headerLink}>
            More About Me
          </a>
          <a href="/portfolio" className={css.headerLink}>
            My Portfolio
          </a>
          <a href="/contact-me" className={css.headerLink}>
            Get In Touch
          </a>
        </div>
      </Drawer>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
