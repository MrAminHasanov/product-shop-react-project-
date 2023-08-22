import productImg from "./img/product_img/Product_img";
import productTypeImg from "./img/productType_img/productType_img";

export const productType = {
  meat: "Meat",
  fruite: "Fruite",
  vegetables: "Vegetables",
  dairyProduct: "Dairy product",
  driedFruite: "Dried fruits",
  drinkFruite: "Fruite juice",
};

export const productList = [
  {
    name: "Halal beef",
    price: 15,
    id: 0,
    type: productType.meat,
    img: productImg.beef,
  },
  {
    name: "Chicken",
    price: 6,
    id: 1,
    type: productType.meat,
    img: productImg.chicken,
  },
  {
    name: "Nuggets",
    price: 12,
    id: 2,
    type: productType.meat,
    img: productImg.nuggets,
  },
  {
    name: "Nugget legs",
    price: 16,
    id: 3,
    type: productType.meat,
    img: productImg.legNuugets,
  },
  {
    name: "Apple",
    price: 3,
    id: 4,
    type: productType.fruite,
    img: productImg.apple,
  },
  {
    name: "Orange",
    price: 4,
    id: 5,
    type: productType.fruite,
    img: productImg.orange,
  },
  {
    name: "Mango",
    price: 5,
    id: 6,
    type: productType.fruite,
    img: productImg.mango,
  },
  {
    name: "Dried apricots",
    price: 7,
    id: 7,
    type: productType.driedFruite,
    img: productImg.apricot,
  },
  {
    name: "Mixed juice",
    price: 9,
    id: 8,
    type: productType.drinkFruite,
    img: productImg.mixJuice,
  },
  {
    name: "Orange juice",
    price: 6,
    id: 9,
    type: productType.drinkFruite,
    img: productImg.orangeJuice,
  },
  {
    name: "Summer juice",
    price: 4,
    id: 10,
    type: productType.drinkFruite,
    img: productImg.summerJuice,
  },
  {
    name: "Onion",
    price: 1.5,
    id: 11,
    type: productType.vegetables,
    img: productImg.onion,
  },
  {
    name: "Potato",
    price: 2,
    id: 12,
    type: productType.vegetables,
    img: productImg.potato,
  },
  {
    name: "Carrot",
    price: 1,
    id: 13,
    type: productType.vegetables,
    img: productImg.carrot,
  },
  {
    name: "Milk",
    price: 3,
    id: 14,
    type: productType.dairyProduct,
    img: productImg.milk,
  },
  {
    name: "Cheese",
    price: 4,
    id: 15,
    type: productType.dairyProduct,
    img: productImg.chees,
  },
  {
    name: "Yogurt",
    price: 8,
    id: 16,
    type: productType.dairyProduct,
    img: productImg.yogurt,
  },
];

export const productTypeList = [
  { name: productType.meat, img: productTypeImg.Meat, bg: "rgb(199, 2, 2)" },
  {
    name: productType.fruite,
    img: productTypeImg.freshFruit,
    bg: "rgb(255, 255, 108)",
  },
  {
    name: productType.driedFruite,
    img: productTypeImg.DriedFruit,
    bg: "rgb(173, 143, 88)",
  },
  {
    name: productType.drinkFruite,
    img: productTypeImg.DrinkFruit,
    bg: "rgb(255, 202, 102)",
  },
  {
    name: productType.vegetables,
    img: productTypeImg.vegatebels,
    bg: "#537423",
  },
  {
    name: productType.dairyProduct,
    img: productTypeImg.milkProduct,
    bg: "rgb(220, 243, 240)",
  },
];
const hi={

}
export function randomProducts(id) {
  const productType = productList.find((product) => product.id === id).type;

  let filteredProductList = productList.filter(
    (product) => product.type === productType && product.id !== id
  );

  while (filteredProductList.length < 4) {
    let randomElement = Math.floor(Math.random() * productList.length);
    if (
      !filteredProductList.some(
        (product) => product.id === productList[randomElement].id
      ) &&
      randomElement !== id
    )
      filteredProductList.push(productList[randomElement]);
  }
  return filteredProductList;
}
