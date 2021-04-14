import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

//slug is used from when we set the slug in context from the gatsby.node
//must include export for gatsby to pick up query
export const query = graphql`
  query($slug: String!) {
    contentfulHymns(slug: { eq: $slug }) {
      title
      body {
        raw
      }
    }
  }
`
//graphql query gets passed down as props in blog component.
const Blog = props => {
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       const alt = node.data.target.fields.title["en-US"]
  //       const url = node.data.target.fields.file["en-US"].url
  //       return <img alt={alt} src={url} />
  //     },
  //   },
  // }
  console.log(props, "props")
  return (
    <Layout>
      <Head title={props.data.contentfulHymns.title} />
      <div style={{ whiteSpace: "pre-wrap", padding: "25px", textAlign: "center" }}>
        <h1>{props.data.contentfulHymns.title}</h1>
        {documentToReactComponents(
          JSON.parse(props.data.contentfulHymns.body.raw)
        )}
      </div>
    </Layout>
  )
}

export default Blog
