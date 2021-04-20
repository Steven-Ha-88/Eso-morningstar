import React from 'react'
import * as indexStyles from './../pages/home.module.scss';
import { GatsbyImage, getImage } from "gatsby-plugin-image"



export default function HomeComponent({data, shrink}) {
  const image = getImage(data.node)
  return (
    <div style={{minHeight: `${shrink ? '50vh' : null}`}}className={indexStyles.homeWrapper}>
      <div className={indexStyles.homeText}>
        <h1>{data.node.title}</h1>
        <p>{data.node.description.description}</p>
      </div>
      <div>
        <div className={indexStyles.homeImage}>
          <GatsbyImage placeholder="blurred" image={image} alt={data.node.title} />
        </div>
      </div>
  
    
    </div>
  )
}
