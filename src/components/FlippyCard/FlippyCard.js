import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./../FlippyCard/FlippyCard.css";

function FlippyCard({ heroes }) {
  return heroes.map(({ id, imgUrl, name, links }) => (
    <Flippy
      flipOnHover={false}
      flipOnClick={true}
      flipDirection="horizontal"
      style={{ width: "400px", height: "450px", margin: 30 }}
      key={id}
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
          backgroundColor: "#183A37",
          borderRadius: 30,
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img className="back-img" alt={"Not Found"} src={imgUrl} />
        <p>ID: {id}</p>
        LINKS:
        <div className="links">
          {links.map((link, index) => {
            return (
              <div key={index}>
                <a
                  style={{ marginRight: 20 }}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.type}
                </a>
              </div>
            );
          })}
        </div>
      </BackSide>
    </Flippy>
  ));
}

export default React.memo(FlippyCard);
