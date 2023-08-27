import { useNavigate } from "react-router-dom";
import c from "./CaruselBox.module.scss";

function CaruselBox({ info }) {
  const navigate = useNavigate();
  const goShop = () =>
    navigate("/shop", { state: { category: info.name, search: "" } });
  return (
    <div className={c.component} style={{ "--color": info.bg }}>
      <div className={c.inner}>
        <img className={c.image} src={info.img} alt={info.name}></img>
        <div onClick={() => goShop()} className={c.title}>
          {info.name}
        </div>
      </div>
    </div>
  );
}

export default CaruselBox;
