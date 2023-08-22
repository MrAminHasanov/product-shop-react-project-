import { useSelector } from "react-redux";
import c from "./CardCounter.module.scss";
import { useActions } from "hooks/useActions";
import { useEffect, useState } from "react";

function CardCounter({id}) {
  const { shopList } = useSelector((state) => state);

  const { incrimentCount, dincrimentCount } = useActions();

  const [shopExist, setShopExist] = useState("");

  useEffect(() => {
    setShopExist(id in shopList);
  }, [shopList, id]);
  return (
    <div className={c.component}>
      <div className={c.incrimentBtn} onClick={() => dincrimentCount(id)}>
        -
      </div>
      <div className={c.countShow}>{shopExist ? shopList[id] : 0}</div>
      <div className={c.dincrimentBtn} onClick={() => incrimentCount(id)}>
        +
      </div>
    </div>
  );
}

export default CardCounter;
