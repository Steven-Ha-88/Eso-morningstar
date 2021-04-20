// Logo.js
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from './../../Images/esomorning/logo1.png'

const LogoWrap = styled.div`
  margin: auto 0;
  /* flex: 0 1 70px; */
    display: flex;
    padding: 10px;
    max-width: 250px;


  /* @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  } */
`
const Logo = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(name: { eq: "logo" }, extension: { eq: "png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 50, pngQuality: 80) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <LogoWrap as={Link} to="/">
      {/* <Img fluid={data.file.childImageSharp.fluid} alt="logo" /> */}
      <img style={{marginBottom: "0px", width: "100%", objectFit:"contain", height:"min-intrinsic"}} src={logo} alt="logo" />
    </LogoWrap>
  )
}

export default Logo