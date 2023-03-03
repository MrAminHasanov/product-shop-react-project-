import { useState } from "react";
import logo from "../../img/logo(1).png"
import c from "./Header.module.scss";

function Header() {
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
                <i className="fa-solid fa-heart"></i>
                <i className="fa-solid fa-bag-shopping"></i>
                <b>item:$150.000</b>
            </div>
            <div className={c.header_box_4}>
                <button onClick={() => setLof(!lof)}>
                    <i></i>
                    All deportaments
                    <i className={lof ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-down"}></i>
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
        </div>
    )
}

export default Header