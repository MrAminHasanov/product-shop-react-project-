import React, { createContext, useEffect, useState } from 'react';
import product_img from './img/product_img/Product_img';
import productType_img from './img/productType_img/productType_img';
import { v4 as uuidv4 } from 'uuid';

export const ProductContext = createContext();
function ProductProvider(props) {
    const [productList, setProductList] = useState(
        [
            { name: "Onion", price: 1.5, id: uuidv4(), type: "Vegebale", img: product_img.Onion },
            { name: "Potato", price: 2, id: uuidv4(), type: "Vegebale", img: product_img.potato },
            { name: "Carrot", price: 1, id: uuidv4(), type: "Vegebale", img: product_img.carrot },
            { name: "Milk", price: 3, id: uuidv4(), type: "Dairy product", img: product_img.milk },
            { name: "Cheese", price: 4, id: uuidv4(), type: "Dairy product", img: product_img.chees },
            { name: "Halal beef", price: 15, id: uuidv4(), type: "Meet", img: product_img.Beef },
            { name: "Chicken", price: 6, id: uuidv4(), type: "Meet", img: product_img.chicken },
            { name: "Apple", price: 3, id: uuidv4(), type: "Fruit", img: product_img.apple },
            { name: "Orange", price: 4, id: uuidv4(), type: "Fruit", img: product_img.orange },
            { name: "Mango", price: 5, id: uuidv4(), type: "Fruit", img: product_img.mango },
        ]
    )
    const [productTypeList, SetProductTypeList] = useState(
        [
            { name: "Vegebale", img: productType_img.vegatebels, bg: "#537423" },
            { name: "Fruit", img: productType_img.freshFruit, bg: "rgb(255, 255, 108)" },
            { name: "Dried fruit", img: productType_img.DriedFruit, bg: "rgb(173, 143, 88)" },
            { name: "Drink fruit", img: productType_img.DrinkFruit, bg: "rgb(255, 202, 102)" },
            { name: "Meet", img: productType_img.Meat, bg: "rgb(199, 2, 2)" },
            { name: "Dairy product", img: productType_img.milkProduct, bg: "rgb(220, 243, 240)" }
        ]
    )
    const [favoriteList, setFavoriteList] = useState([productList[3].id])
    const [shopList, setshopList] = useState([])
    useEffect(() => console.log(shopList), [shopList]);
    return (
        <ProductContext.Provider value={{ productList, productTypeList, favoriteList, setFavoriteList, shopList, setshopList }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;