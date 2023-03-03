import React, { createContext, useState } from 'react';
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
            { name: "Onion", price: 1.5, id: 0, type: "vegebale", img: Onion },
            { name: "Potato", price: 2, id: 1, type: "vegebale", img: potato },
            { name: "Carrot", price: 1, id: 2, type: "vegebale", img: carrot },
            { name: "Milk", price: 3, id: 3, type: "dairy-product", img: milk },
            { name: "Cheese", price: 4, id: 4, type: "dairy-product", img: chees },
            { name: "Halal beef", price: 15, id: 5, type: "meet", img: Beef },
            { name: "Chicken", price: 6, id: 6, type: "meet", img: chicken },
            { name: "Apple", price: 3, id: 7, type: "fruit", img: apple },
            { name: "Orange", price: 4, id: 8, type: "fruit", img: orange },
            { name: "Mango", price: 5, id: 9, type: "fruit", img: mango },
        ]
    )
    return (
        <ProductContext.Provider value={{ productList }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;