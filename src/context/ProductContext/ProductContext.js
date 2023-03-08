import React, { createContext, useEffect, useState } from 'react';
import Onion from "../../img/product_img/onnion.png";
import apple from "../../img/product_img/apple.png";
import Beef from "../../img/product_img/Beef.png";
import chees from "../../img/product_img/chees.png";
import chicken from "../../img/product_img/chicken.png";
import milk from "../../img/product_img/milk.png";
import orange from "../../img/product_img/orrange.png";
import potato from "../../img/product_img/potato.png";
import carrot from "../../img/product_img/carrot.png";
import mango from "../../img/product_img/mango.png";

export const ProductContext = createContext();
function ProductProvider(props) {
    const [productList, setProductList] = useState(
        [
            { name: "Onion", price: 1.5, id: 0, type: "Vegebale", img: Onion },
            { name: "Potato", price: 2, id: 1, type: "Vegebale", img: potato },
            { name: "Carrot", price: 1, id: 2, type: "Vegebale", img: carrot },
            { name: "Milk", price: 3, id: 3, type: "Dairy product", img: milk },
            { name: "Cheese", price: 4, id: 4, type: "Dairy product", img: chees },
            { name: "Halal beef", price: 15, id: 5, type: "Meet", img: Beef },
            { name: "Chicken", price: 6, id: 6, type: "Meet", img: chicken },
            { name: "Apple", price: 3, id: 7, type: "Fruit", img: apple },
            { name: "Orange", price: 4, id: 8, type: "Fruit", img: orange },
            { name: "Mango", price: 5, id: 9, type: "Fruit", img: mango },
        ]
    )
    const [productTypeList, SetProductTypeList] = useState(
        ()=>{
            let arr=[];
            for(let i of productList){if(!arr.includes(i.type)){arr.push(i.type)};};
            return arr;
        }
    )
    useEffect((i=productList[productList.length-1].type) => !productTypeList.includes(i)?SetProductTypeList([...productTypeList, i]):()=>{},[productList]);
    return (
        <ProductContext.Provider value={{ productList,productTypeList }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;