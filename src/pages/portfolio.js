import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioPageContent from "../components/PortfolioPageContent"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioPageContent />
  </Layout>
)

export default PortfolioPage
