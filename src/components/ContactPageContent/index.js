import React from "react"

import css from "./contactPageContent.module.css"

//  TODO:socials with written-out links next to icons
//  TODO:email form
//  TODO:component that integrates Twitter (newsfeed and/or tweet me button!)

function ContactPageContent() {
  return (
    <div id={css.contactPageContent}>
      <h1 style={{ fontFamily: "Roboto" }}>Want to get in touch?</h1>
    </div>
  )
}

export default ContactPageContent
