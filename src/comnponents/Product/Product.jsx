import React, { useContext } from 'react';
import c from "./Product.module.scss";

function Product({ product, visability }) {

    return (
        <div className={`${c.product} ${visability == undefined ? null : c.visabiltyFall}`}>
            <img src={product.img}></img>
            <div>{product.name}</div>
            <div>{product.price}$</div>
            <div className={c.product_button}>
                <i className="fa-solid fa-heart"></i>
                <i className="fa-solid fa-basket-shopping"></i>
            </div>
        </div>
    )
}

export default Product;