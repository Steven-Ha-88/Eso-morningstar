import React from "react";
import * as indexStyles from "./home.module.scss";
import Layout from "../components/layout";
import Head from "../components/head";
import HomeComponent from "./../components/HomeComponent";
import { Youtube } from "./../components/Youtube/index";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHome(sort: { fields: [title], order: ASC }) {
        edges {
          node {
            title
            image {
              file {
                url
              }
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
            description {
              description
            }
          }
        }
      }
    }
  `);

  console.log(data, "THIS IS DATA");
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.banner}>
        <div className={indexStyles.bannerHeading}>
          <h1>The Morning star and St.Michael star</h1>
          <p>LONDON PROVINCE</p>
          <p>
            I would like to welcome you to the warm embrace of this Family
            Church where; Loving God and loving one another is a cherished
            culture. Your peculiarity is treasured and integrated. Your
            spiritual life is built on the strong foundation of Faith and the
            power of the Holy Ghost.
          </p>
          <div>
            <Link to="/blog">Hymns</Link>
            <Link to="/">Donate</Link>
          </div>
        </div>
        <div className={indexStyles.bannerImg}>
          <StaticImage
            placeholder="tracedSVG"
            src="./../Images/esomorning/group_of_friends.png"
            alt="A church window"
          />
        </div>
      </div>
      
      <HomeComponent about data={data.allContentfulHome.edges[0]} />
      <Youtube />
      <div className={indexStyles.container}>
        <HomeComponent shrink data={data.allContentfulHome.edges[1]} />
        <HomeComponent shrink data={data.allContentfulHome.edges[2]} />
        <HomeComponent shrink data={data.allContentfulHome.edges[3]} />
      </div>
    </Layout>
  );
};

export default IndexPage;
