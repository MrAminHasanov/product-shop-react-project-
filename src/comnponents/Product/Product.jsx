import React, { useContext } from 'react';
import c from "./Product.module.scss";

function Product({ product }) {
    return (
        <div className={c.product}>
            <img src={product.img}></img>
            <div>{product.name}</div>
            <div>{product.price}$</div>
            <div className={c.product_button}>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-basket-shopping"></i>
            </div>
        </div>
    )
}

export default Product;