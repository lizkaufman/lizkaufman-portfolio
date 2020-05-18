import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import HamburgerMenu from "react-hamburger-menu"

function Header({ siteTitle }) {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <header
      style={{
        background: `#eccf59`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#3a3b3c`,
              textDecoration: `none`,
              fontFamily: "Roboto",
              fontSize: "100%",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div style={{ margin: "auto 0" }}>
          <HamburgerMenu
            isOpen={open}
            menuClicked={handleClick}
            width={50}
            height={30}
            strokeWidth={5}
            rotate={0}
            color="#3a3b3c"
            borderRadius={50}
            animationDuration={0.5}
          />
        </div>
      </div>
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
