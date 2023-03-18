import React, { useContext } from 'react';
import c from "./Product.module.scss";

function Product({ product, visability, favoriteList, setFavoriteList, shopList, setshopList }) {
    return (
        <div className={`${c.product}`} style={visability == undefined ? null : { scale: 0, position: 'absolute', transition: "0s" }}>
            <img src={product.img}></img>
            <div>{product.name}</div>
            <div>{product.price}$</div>
            <div className={c.product_button}>
                <i 
                    style={favoriteList.includes(product.id) ? { color: "red" } : null}
                    onClick={() => setFavoriteList(favoriteList.includes(product.id) ? favoriteList.filter((i) => i != product.id) : [...favoriteList, product.id])}
                    className={`fa-solid fa-heart ${favoriteList.includes(product.id) ? c.scale_animation : null}`}></i>
                <i
                    style={shopList.map(i => i.id).includes(product.id) ? { color: "rgb(97, 97, 226)" } : null}
                    onClick={() => setshopList(shopList.map(i => i.id).includes(product.id) ? shopList.filter(i => i.id !== product.id) : [...shopList, { id: product.id, count: 1 }])}
                    className={`fa-solid fa-basket-shopping ${shopList.map(i => i.id).includes(product.id) ? c.scale_animation : null}`}></i>
            </div>
        </div >
    )
}
// color: "rgb(97, 97, 226)"
export default Product;