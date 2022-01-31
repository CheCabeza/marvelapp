import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./styles/FlippyCard.css";

export default function FlippyCard({ imgUrl, name, id }) {
  return (
    <Flippy
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
      <BackSide style={{ backgroundColor: "#175852", borderRadius: 30 }}>
        DETAILS
        <p>{id}</p>
      </BackSide>
    </Flippy>
  );
}
