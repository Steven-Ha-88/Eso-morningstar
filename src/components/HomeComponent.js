import React from 'react'
import * as indexStyles from './../pages/home.module.scss';


export default function HomeComponent({data, shrink}) {
  return (
    <div style={{minHeight: `${shrink ? '50vh' : null}`}}className={indexStyles.homeWrapper}>
      <div className={indexStyles.homeText}>
        <h1>{data.node.title}</h1>
        <p>{data.node.description.description}</p>
      </div>
      <div>
        <div className={indexStyles.homeImage}>
          <img src={`https:${data?.node?.image?.file?.url}`} alt={data.node.title} />
        </div>
      </div>
    
    </div>
  )
}
