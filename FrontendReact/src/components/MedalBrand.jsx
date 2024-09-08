import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Correctly import all images
import image11 from "../assets/image_11.jpg";
import image12 from "../assets/image_12.jpg";
import image13 from "../assets/image_13.jpg";
import image14 from "../assets/image_14.jpg";
import image15 from "../assets/image_15.jpg";
import image16 from "../assets/image_16.jpg";
import image17 from "../assets/image_17.jpg";
import image18 from "../assets/image_18.jpg";
import image19 from "../assets/image_19.jpg";
import image20 from "../assets/image_20.jpg";
import image21 from "../assets/image_21.jpg";
import image22 from "../assets/image_22.jpg";
import image23 from "../assets/image_23.jpg";
import image24 from "../assets/image_24.jpg";
import image25 from "../assets/image_25.jpg";
import image26 from "../assets/image_26.jpg";
import image27 from "../assets/image_27.jpg";
import image28 from "../assets/image_28.jpg";
import image29 from "../assets/image_29.jpg";
import image30 from "../assets/image_30.jpg";
import image31 from "../assets/image_31.jpg";
import image32 from "../assets/image_32.jpg";
import image33 from "../assets/image_33.jpg";
import image34 from "../assets/image_34.jpg";
import image35 from "../assets/image_35.jpg";
import image36 from "../assets/image_36.jpg";

// Sample data - update the array with new images
const carouselData = [
  { id: 11, imgUrl: image11, link: "#" },
  { id: 12, imgUrl: image12, link: "#" },
  { id: 13, imgUrl: image13, link: "#" },
  { id: 14, imgUrl: image14, link: "#" },
  { id: 15, imgUrl: image15, link: "#" },
  { id: 16, imgUrl: image16, link: "#" },
  { id: 17, imgUrl: image17, link: "#" },
  { id: 18, imgUrl: image18, link: "#" },
  { id: 19, imgUrl: image19, link: "#" },
  { id: 20, imgUrl: image20, link: "#" },
  { id: 21, imgUrl: image21, link: "#" },
  { id: 22, imgUrl: image22, link: "#" },
  { id: 23, imgUrl: image23, link: "#" },
  { id: 24, imgUrl: image24, link: "#" },
  { id: 25, imgUrl: image25, link: "#" },
  { id: 26, imgUrl: image26, link: "#" },
  { id: 27, imgUrl: image27, link: "#" },
  { id: 28, imgUrl: image28, link: "#" },
  { id: 29, imgUrl: image29, link: "#" },
  { id: 30, imgUrl: image30, link: "#" },
  { id: 31, imgUrl: image31, link: "#" },
  { id: 32, imgUrl: image32, link: "#" },
  { id: 33, imgUrl: image33, link: "#" },
  { id: 34, imgUrl: image34, link: "#" },
  { id: 35, imgUrl: image35, link: "#" },
  { id: 36, imgUrl: image36, link: "#" },
];

const MedalBrand = () => {
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 6 images at once
    slidesToScroll: 6, // Scroll by 6 images
    autoplay: true,
    autoplaySpeed: 3000, // Speed in ms
    arrows: false, // No arrows
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id} className="px-2">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imgUrl}
                alt={`Slide ${item.id}`}
                className="w-full h-auto object-cover"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MedalBrand;
