import Nav from "./navigation/nav";
import Product from "./Products/products";
import Recommended from "./Recommended/recommend";
import Sidebar from "./Sidebar/sidebar";
import "./index.css"
import { useState } from "react";
import Card from "./components/card.jsx";

import Products from "./db/data.jsx"
const App = () => {
  const [selectedCategory, setselectedCategory] = useState(null)

  // input filter 
  const [query, setquery] = useState("")

  const handleChange = (e) => {
    setquery(e.target.value);
  }

  const filtereditems = Products.filter(e =>
    e.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  console.log(filtereditems)

  // ---------radio filter------------
  const handleRadioChange = (e) => {
    setselectedCategory(e.target.value)
  }

  // ---------buttons filter ----------
  const handleClick = (e) => {
    setselectedCategory(e.target.value)
  }


  const filteredata = (products, selectedCategory, query) => {
    console.log("Products before filtering:", products);
    console.log("Selected Category:", selectedCategory);
    console.log("Query:", query);
    let filteredproducts = Products;
    if (query) {
      filteredproducts = filtereditems
    }
    if (selectedCategory) {
      console
      filteredproducts = filteredproducts.filter(
        ({ category, color, company, newPrice, title }) => (
          category === selectedCategory 
          || color === selectedCategory 
          || company === selectedCategory 
          || newPrice == selectedCategory
        ))

    }

    return filteredproducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
        star={star}
      />
    ));

  }

  const result = filteredata(Products, selectedCategory, query);


  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <div className="main-content">
        <Nav query={query} handleChange={handleChange} />
        <Recommended handleClick={handleClick} />
        <Product result={result} />
      </div>
    </>
  )
}


export default App;