import React, { createContext, useReducer, useState } from 'react';
import productImg from './img/product_img/Product_img';
import productTypeImg from './img/productType_img/productType_img';
import { v4 as uuidv4 } from 'uuid';
import favoriteReducer from '../../reducers/favorite-reducer';
// import data from './ProductData/ProductType.json'

export const productType={vegetables:"Vegetables",fruite:"Fruite",dairyProduct:"Dairy product",meat:"Meat",driedFruite:"Dried fruite",drinkFruite:"Drink fruite"}
export const ProductContext = createContext();
function ProductProvider(props) {
    const [productList, setProductList] = useState(
        [
            { name: "Onion", price: 1.5, id: uuidv4(), type: productType.vegetables, img: productImg.onion },
            { name: "Potato", price: 2, id: uuidv4(), type: productType.vegetables, img: productImg.potato },
            { name: "Carrot", price: 1, id: uuidv4(), type: productType.vegetables, img: productImg.carrot },
            { name: "Milk", price: 3, id: uuidv4(), type: productType.dairyProduct, img: productImg.milk },
            { name: "Cheese", price: 4, id: uuidv4(), type: productType.dairyProduct, img: productImg.chees },
            { name: "Halal beef", price: 15, id: uuidv4(), type: productType.meat, img: productImg.beef },
            { name: "Chicken", price: 6, id: uuidv4(), type: productType.meat, img: productImg.chicken },
            { name: "Apple", price: 3, id: uuidv4(), type: productType.fruite, img: productImg.apple },
            { name: "Orange", price: 4, id: uuidv4(), type: productType.fruite, img: productImg.orange },
            { name: "Mango", price: 5, id: uuidv4(), type: productType.fruite, img: productImg.mango },
        ]
    )

    const [productTypeList, SetProductTypeList] = useState(
        [
            { name: productType.vegetables, img: productTypeImg.vegatebels, bg: "#537423" },
            { name: productType.fruite, img: productTypeImg.freshFruit, bg: "rgb(255, 255, 108)" },
            { name: productType.driedFruite, img: productTypeImg.DriedFruit, bg: "rgb(173, 143, 88)" },
            { name: productType.drinkFruite, img: productTypeImg.DrinkFruit, bg: "rgb(255, 202, 102)" },
            { name: productType.meat, img: productTypeImg.Meat, bg: "rgb(199, 2, 2)" },
            { name: productType.dairyProduct, img: productTypeImg.milkProduct, bg: "rgb(220, 243, 240)" }
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