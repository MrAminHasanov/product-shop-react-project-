import React from "react";
import Carusel from "../../comnponents/Carusel/Carusel";
import Banner from "../../comnponents/HomeComponents/Banner/Banner";
import ProductSection from "../../comnponents/HomeComponents/ProductSection/ProductSection";
import BlogSection from "../../comnponents/HomeComponents/BlogSection/BlogSection";

function Home() {
  return (
    <div className="HomePage">
      <Banner />
      <Carusel />
      <ProductSection />
      <BlogSection />
    </div>
  );
}

export default Home;
