import React from "react";
import Carusel from "../../comnponents/Carusel/Carusel";
import Banner from "../../comnponents/HomeComponents/Banner/Banner";
import ProductSection from "../../comnponents/HomeComponents/ProductSection/ProductSection";

function Home() {
  return (
    <div className="HomePage">
      <Banner />
      <Carusel />
      <ProductSection />
    </div>
  );
}

export default Home;
