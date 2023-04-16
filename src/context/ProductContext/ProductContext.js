import React, { createContext, useReducer, useState } from 'react';
import productImg from './img/product_img/Product_img';
import productTypeImg from './img/productType_img/productType_img';
import { v4 as uuidv4 } from 'uuid';
import favoriteReducer from '../../reducers/favorite-reducer';

export const ProductContext = createContext();
// const productType={vegetables:"vegetables",fruit:"Fruit",}
function ProductProvider(props) {
    
    const [productList, setProductList] = useState(
        [
            { name: "Onion", price: 1.5, id: uuidv4(), type: "Vegebale", img: productImg.onion },
            { name: "Potato", price: 2, id: uuidv4(), type: "Vegebale", img: productImg.potato },
            { name: "Carrot", price: 1, id: uuidv4(), type: "Vegebale", img: productImg.carrot },
            { name: "Milk", price: 3, id: uuidv4(), type: "Dairy product", img: productImg.milk },
            { name: "Cheese", price: 4, id: uuidv4(), type: "Dairy product", img: productImg.chees },
            { name: "Haram beef", price: 15, id: uuidv4(), type: "Meat", img: productImg.beef },
            { name: "Chicken", price: 6, id: uuidv4(), type: "Meat", img: productImg.chicken },
            { name: "Apple", price: 3, id: uuidv4(), type: "Fruit", img: productImg.apple },
            { name: "Orange", price: 4, id: uuidv4(), type: "Fruit", img: productImg.orange },
            { name: "Mango", price: 5, id: uuidv4(), type: "Fruit", img: productImg.mango },
        ]
    )

    const [productTypeList, SetProductTypeList] = useState(
        [
            { name: "Vegebale", img: productTypeImg.vegatebels, bg: "#537423" },
            { name: "Fruit", img: productTypeImg.freshFruit, bg: "rgb(255, 255, 108)" },
            { name: "Dried fruit", img: productTypeImg.DriedFruit, bg: "rgb(173, 143, 88)" },
            { name: "Drink fruit", img: productTypeImg.DrinkFruit, bg: "rgb(255, 202, 102)" },
            { name: "Meat", img: productTypeImg.Meat, bg: "rgb(199, 2, 2)" },
            { name: "Dairy product", img: productTypeImg.milkProduct, bg: "rgb(220, 243, 240)" }
        ]
    )
    
        
  const [favoriteList,favoriteListDispatch] = useReducer(favoriteReducer,[]);
    const [shopList, setshopList] = useState([])
    return (
        <ProductContext.Provider value={{ productList, productTypeList,shopList, setshopList,favoriteList,favoriteListDispatch }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;