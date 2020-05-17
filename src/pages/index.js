import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Liz!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h2>
      I’m a freshly-minted software developer from the School of Code’s third
      cohort.
    </h2>
    <p>
      I studied history and archeology, which was about as useful as you'd
      imagine in my office jobs after that! I’m drawn to technology and
      development because I’ve always loved learning, challenges, and the
      occasional leap into the unknown – not to mention that coding is the
      closest thing to magic in real life!
    </p>
    <p>
      In 2019, I decided to follow my heart towards technology by learning to
      code, and I applied to the School of Code. By May 2020, my time as a
      bootcamper equipped me with the skills I needed for full-stack agile
      development and completely changed my life.
    </p>

    {/* <Link to="/about-me/">More about me</Link> */}
    {/* <Link to="/projects/">See what I've made</Link> */}
    {/* <Link to="/contact-me/">Get in touch!</Link> */}
  </Layout>
)

export default IndexPage
