import React, { createContext } from 'react'
import vegatebels from "../../img/vegetabels.png"
import freshFruit from "../../img/freshFruit.png"
import DriedFruit from "../../img/DriedFruit.png"
import DrinkFruit from "../../img/DrinkFruit.png"
import Meat from "../../img/Meat.png"
import milkProduct from "../../img/milkProduct.png"

export const CaruselContext  = createContext();
function CaruselProvider(props) {
  const caruselContent =[
    {name:"VEGETABLES",img:vegatebels,bg:"#537423"},
    {name:"FRESH FRUIT",img:freshFruit,bg:"rgb(255, 255, 108)"},
    {name:"DRIED FRUIT",img:DriedFruit,bg:"rgb(173, 143, 88)"},
    {name:"DRINK FRUITS",img:DrinkFruit,bg:"rgb(255, 202, 102)"},
    {name:"MEATS",img:Meat,bg:"rgb(199, 2, 2)"},
    {name:"MILK PRODUCTS",img:milkProduct,bg:null}
  ]  
  return (
    <CaruselContext.Provider value={{caruselContent}}>
        {props.children};
    </CaruselContext.Provider>
  )
}

export default CaruselProvider;