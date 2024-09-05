import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Define responsive breakpoints for a single item view
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Custom styles for the carousel
const customStyles = {
  carousel: {
    position: "relative",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },
  prevArrow: {
    left: "10px",
  },
  nextArrow: {
    right: "10px",
  },
};

const Banner = () => {
  return (
    <div style={customStyles.carousel}>
      <Carousel
        responsive={responsive}
        showDots={true}
        arrows={true}
        customLeftArrow={
          <button style={{ ...customStyles.arrow, ...customStyles.prevArrow }}>
            {"<"}
          </button>
        }
        customRightArrow={
          <button style={{ ...customStyles.arrow, ...customStyles.nextArrow }}>
            {">"}
          </button>
        }
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <div>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+5"
            alt="Slide 1"
            className="w-full"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Slide 2"
            className="w-full"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Slide 3"
            className="w-full"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+4"
            alt="Slide 4"
            className="w-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
