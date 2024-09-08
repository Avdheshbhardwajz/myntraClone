import React from "react";
import Banner from "../components/Banner";
import MedalBrand from "../components/MedalBrand";
import GlobalBrand from "../components/GlobalBrand";
import ShopCategory from "../components/ShopCategory";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="m-0 p-[5vw]">
      <Banner />
      <h1 className="text-3xl font-medium text-white font-poppins pt-5 pb-5">
        Medal Worth Brand to Bag
      </h1>
      <MedalBrand />
      <h1 className="text-3xl font-medium text-white font-poppins pt-5 pb-5">
        Grand Global Brand
      </h1>
      <GlobalBrand />
      <h1 className="text-3xl font-medium text-white font-poppins pt-5 pb-5">
        Shop by Category
      </h1>
      <ShopCategory />
      <Footer />
    </div>
  );
};

export default Homepage;
