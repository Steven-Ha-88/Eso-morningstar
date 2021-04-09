import React from "react"
import { Link } from "gatsby"
import * as indexStyles from './home.module.scss';
import Layout from "../components/layout"
import Head from "../components/head"
import Image from './../Images/esomorning/group_of_friends.png'
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.banner}>
        <div className={indexStyles.bannerHeading}>
          <h1>THE MORNING STAR AND ST.MICHAEL STAR</h1>
          <p>LONDON PROVINCE</p>
          <p>I would like to welcome you to the warm embrace of this Family Church where; Loving God and loving one another is a cherished culture. Your peculiarity is treasured and integrated. Your spiritual life is built on the strong foundation of Faith and the power of the Holy Ghost.</p>
        </div>
        <div className={indexStyles.bannerImg}>
          <img src={Image} alt="Image of people"></img>
        </div>
      </div>
      <h1>Hello.</h1>
      <h2>
        I'm Andrew, a full-stack developer living in beautiful Philadelphia.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
