import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem
      slug="/about/"
      category="Misc"
      background="#fb1"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
    />
  </Layout>
)

export default IndexPage
