import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./FlippyCard.css";

export default function FlippyCard({ imgUrl }) {
  return (
    <Flippy
      flipOnHover={false}
      flipOnClick={true}
      flipDirection="horizontal"
      style={{ width: "50vw", height: "60vh", margin: 30 }}
    >
      <FrontSide
        style={{
          backgroundColor: "#41669d",
          borderRadius: 30,
        }}
      >
        <img alt={"Not Found"} src={imgUrl} />
        HERO
      </FrontSide>
      <BackSide style={{ backgroundColor: "#175852", borderRadius: 30 }}>
        DETAILS
      </BackSide>
    </Flippy>
  );
}
