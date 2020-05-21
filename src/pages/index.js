import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HomePageContent from "../components/HomePageContent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageContent />
  </Layout>
)

export default IndexPage
