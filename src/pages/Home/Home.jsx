import Carusel from "../../comnponents/PagesComponents/HomeComponents/Carusel/Carusel";
import Banner from "../../comnponents/PagesComponents/HomeComponents/Banner/Banner";
import ProductSection from "../../comnponents/PagesComponents/HomeComponents/ProductSection/ProductSection";
import BlogSection from "../../comnponents/PagesComponents/HomeComponents/BlogSection/BlogSection";

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
