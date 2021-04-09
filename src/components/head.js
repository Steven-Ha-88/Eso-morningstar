import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`} >
            <script
            src="https://kit.fontawesome.com/a6447566a7.js"
            crossorigin="anonymous"
            ></script>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Signika:wght@300&display=swap" rel="stylesheet"/>
        </Helmet>     
    )
}

export default Head