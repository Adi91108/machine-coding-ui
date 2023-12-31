import { useState } from "react";
import car1 from "../../../images/car-1.jpg";
import car2 from "../../../images/car-2.jpg";
import car3 from "../../../images/car-3.jpg";
import car4 from "../../../images/car-4.jpg";
import car5 from "../../../images/car-5.jpg";
import ImageSlider from "./ImageSlider";

const Cars = [car1, car2, car3, car4, car5];
const Carousel = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          aspectRatio: "16/9",
          margin: "0 auto",
        }}
      >
        <ImageSlider Img={Cars} />
      </div>
    </>
  );
};

export default Carousel;
