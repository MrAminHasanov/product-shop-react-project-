import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import logo from "../../img/logo(1).png"
import FavoriteBox from "./FavoriteBox/FavoriteBox";
import c from "./Header.module.scss";

function Header() {
    const { shopList, favoriteList, productList, productTypeList } = useContext(ProductContext);
    const [heart, setHeart] = useState(false);
    const [lof, setLof] = useState(true);
    return (
        <div className={c.header}>
            <div className={c.header_box_1}>
                <img src={logo}></img>
            </div>
            <div className={c.header_box_2}>
                <ul>
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>PAGES</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className={c.header_box_3}>
                <div>
                    <div>
                        <i style={heart ? { color: "#7fad39" } : null} onClick={() => { setHeart(!heart); }} className="fa-solid fa-heart"></i>
                        <div style={!heart ? { display: "none" } : null}>
                            <div>
                                {productList.map((i) => favoriteList.includes(i.id) ? <FavoriteBox key={i.id} product={i} lineColor={productTypeList.filter((j) => j.name == i.type)[0].bg} /> : null)}
                            </div>
                        </div>
                    </div>
                    <div><i className="fa-solid fa-bag-shopping"></i></div>
                </div>
                <b>item:$150.000</b>
            </div>

            <div className={c.header_box_4}>
                <button onClick={() => setLof(!lof)}>
                    <i></i>
                    All deportaments
                    <i className={"fa-solid fa-arrow-right"} style={{ transform: lof ? 'rotate(90deg)' : ' ', transition: "ease all .2s" }}></i>
                </button>
                <ul style={!lof ? { height: 0 } : null}>
                    <li>Fresh meat</li>
                    <li>Vegetebales</li>
                    <li>Fresh meat</li>
                    <li>Vegetebales</li>
                    <li>Fresh meat</li>
                    <li>Vegetebales</li>
                    <li>Fresh meat</li>
                    <li>Vegetebales</li>
                    <li>Fresh meat</li>
                    <li>Vegetebales</li>
                    <li>Fresh meat</li>
                    <li>Vegetebales</li>
                </ul>
            </div>
            <div className={c.header_box_5}>
                <button>
                    All categories
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
                <input placeholder="What do you need?"></input>
                <button>
                    SEARCH
                </button>
            </div>
            <div className={c.header_box_6}>
                <i className="fa-solid fa-phone"></i>
                <div>
                    <div>
                        +65 11.188.888
                    </div>
                    <div>
                        support 24/7 time
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header