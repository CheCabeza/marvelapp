import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./../FlippyCard/FlippyCard.css";

function FlippyCard({ heroes }) {
  return heroes.map(({ id, imgUrl, name, links }) => (
    <Flippy
      key={id}
      flipOnHover={false}
      flipOnClick={true}
      flipDirection="horizontal"
      style={{ width: "400px", height: "450px", margin: 30 }}
    >
      <FrontSide
        style={{
          backgroundColor: "#41669d",
          borderRadius: 30,
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img alt={"Not Found"} src={imgUrl} />
        <h4 className="nameSection">{name}</h4>
      </FrontSide>
      <BackSide
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.5,
          borderRadius: 30,
          display: "flex",
          justifyContent: "center",
          padding: 40,
        }}
      >
        <div>
          DETAILS
          <p>{id}</p>
          LINKS
          <div className="links">
            {links.map((links) => {
              return (
                <p style={{ marginRight: 20 }}>
                  <a href={links.url} target="_blank" rel="noreferrer">
                    {links.type}
                  </a>
                </p>
              );
            })}
          </div>
        </div>
      </BackSide>
    </Flippy>
  ));
}

export default React.memo(FlippyCard);
