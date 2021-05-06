import React from "react";
import * as indexStyles from "./../pages/home.module.scss";

export default function HomeComponent({ data, shrink }) {
  const Image = `http:${data?.node?.image?.file?.url}`;
  // console.log(data, " image data");
  // console.log(Image, "LOOOOOK HEREE MATE");
  return (
    <div
      style={{ minHeight: `${shrink ? "50vh" : null}`, background: `${shrink ? '#0000ff00' : null}`, backgroundSize: "cover"   }}
      className={indexStyles.homeWrapper}
    >
      <div className={indexStyles.homeText}>
        <h1>{data.node.title}</h1>
        <p>{data.node.description.description}</p>
      </div>
      {!shrink ? null : (<div>
        <div className={indexStyles.homeImage}>
          <img src={Image} alt="church" />
        </div>
      </div>)}
    </div>
  );
}
