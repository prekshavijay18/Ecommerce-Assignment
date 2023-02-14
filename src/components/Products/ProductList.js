import classes from "./ProductList.module.css";
import React, { Fragment, useState, useEffect, useContext } from "react";
import Card from "../Body/Card";
import { DetailedViewContext } from "../../App";
function ProductList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  //  const radiobtn = document.getElementById(props.title);
  // radiobtn.checked = true;
  var reqUrl = "";
  const [selectedItem, setSelectedItem] = useState("Jewelery");
  var selected = "";

  const {productCategories, setProductCategories} = useContext(DetailedViewContext);

  // const selectionHandler = () => {
  //   selected = document.querySelector('input[name="Category"]:checked').value;
  //   console.log(selected.toLowerCase());
  //   setSelectedItem(selected.toLowerCase());
  //   reqUrl =
  //     "https://fakestoreapi.com/products/category/" +
  //     selected.toLowerCase() +
  //     "?limit=4";
  //   console.log(reqUrl);
  // };

  const selectionHandler = (e) => {
    const {name, value} = e.target;
    setProductCategories(value)
  };


  useEffect(() => {
    if(productCategories){
      fetch(`https://fakestoreapi.com/products/category/${productCategories.toLowerCase()}?limit=4`)
      .then((res) => res.json())
      .then(
        (result) => {  
          const newArr = result.map(v => ({...v, amount: 1}))
        console.log(result);
        console.log(newArr);
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }
  }, [productCategories]);

  console.log("productCategories", productCategories);

  return (
    <Fragment>
      <div className={classes.divide}>
        <div className={classes.categories}>
          <div className={classes.main} id="cats">
            Categories
          </div>
          <div className={classes.item1}>
            <input
              type="radio"
              value="Electronics"
              name="Category"
              id="Electronics"
              checked={productCategories === "Electronics" ? true : false}
              onChange={selectionHandler}
            />
            <label>Electronics</label>
          </div>
          <div className={classes.item2}>
            <input
              type="radio"
              value="Jewelery"
              name="Category"
              id="Jewelery"
              onChange={selectionHandler}
              checked={productCategories === "Jewelery" ? true : false}
            />
            <label>Jewellery</label>
          </div>
          <div className={classes.item3}>
            <input
              type="radio"
              value="Men's clothing"
              name="Category"
              id="Men's clothing"
              onChange={selectionHandler}
              checked={productCategories === "Men's clothing" ? true : false}
            />
            <label>Men's clothing</label>
          </div>
          <div className={classes.item4}>
            <input
              type="radio"
              value="Women's clothing"
              name="Category"
              id="Women's clothing"
              checked={productCategories === "Women's clothing" ? true : false}
              onChange={selectionHandler}
            />
            <label>Women's clothing</label>
          </div>
        </div>
        <div >
         <div className={classes.products}>Products</div> 
          <Card
            viewDetails={props.viewDetails}
            onShowPopUp={props.onShowPopUp}
            data={items}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ProductList;
