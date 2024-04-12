import { Link } from "react-router-dom";
import c from "./Banner.module.scss"
import banner from "img/banner.jpg.jpg"

function Banner() {
  return (
    <div className={c.banner}>
      <img src={banner} alt="" />
      <div className={c.content}>
        <div className={c.title}>FRUIT FRESH</div>
        <div className={c.text1}>
          Vegetable<br></br> 100% Organic
        </div>
        <div className={c.text2}>Free Pickup and Delivery Available</div>
          <Link to={"/shop"} className={c.button}>SHOP NOW</Link>
      </div>
    </div>
  );
}

export default Banner;
