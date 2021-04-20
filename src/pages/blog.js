import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import * as blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulHymns(sort: { fields: [title], order: ASC }) {
        edges {
          node {
            slug
            title
            id
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div style={{padding: "25px"}}>
      <h1>Songs</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulHymns?.edges?.map(edge => {
          return (
            <li key={edge.node.slug} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
              </Link>
            </li>
          )
        })}
      </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
