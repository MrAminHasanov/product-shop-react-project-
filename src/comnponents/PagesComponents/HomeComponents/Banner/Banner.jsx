import c from "./Banner.module.scss"

function Banner() {
  return (
    <div className={c.banner}>
      <div className={c.content}>
        <div className={c.title}>FRUIT FRESH</div>
        <div className={c.text1}>
          Vegetable<br></br> 100% Organic
        </div>
        <div className={c.text2}>Free Pickup and Delivery Available</div>
          <button className={c.button}>SHOP NOW</button>
      </div>
    </div>
  );
}

export default Banner;
