import React, { useContext, useState } from "react";
import Carusel from "../../comnponents/Carusel/Carusel";
import Banner from "../../comnponents/HomeComponents/Banner/Banner";
import ProductSection from "../../comnponents/HomeComponents/ProductSection/ProductSection";

function Home() {
  return (
    <>
      <Banner />
      <Carusel />
      <ProductSection />
    </>
  );
}

export default Home;
