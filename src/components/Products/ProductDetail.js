import classes from "./ProductDetail.module.css";
import React, { Fragment, useState, useEffect, useContext, Alert } from "react";
import { DetailedViewContext } from "../../App";
import star from "../../assests/Star.png";

import wish from "../../assests/wishlist.png";
function ProductDetail(props) {
  const { id, setId } = useContext(DetailedViewContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { showCountHandler } = useContext(DetailedViewContext);
  
  const {item, showItemHandler} = useContext(DetailedViewContext);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          const newArr = result.map(v => ({...v, amount: 1}))
          console.log(result);
          console.log(newArr);
          setIsLoaded(true);
          setItems(newArr);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const added = () => {
    alert("Added to Cart");
  };
  return (
    <Fragment>
      <div className={classes.card}>
        <div className={classes["grid-container"]}>
          <div className={classes["div-container"]}>
            <img className={classes.item1} src={items.image} />
            <img className={classes.item2} src={items.image} />
            <img className={classes.item3} src={items.image} />
          </div>

          <img className={classes.mainImg} src={items.image} />
          <div className={classes.details}>
            <div>
              <label className={classes.title}>{items.title}</label>
            </div>
            <br></br>
            <div>
              <label className={classes.rating}>
                {items?.rating?.rate ? items?.rating?.rate : 0.0}
              </label>
              <img className={classes.star} src={star} />
              <label className={classes.count}>
                ({items?.rating?.count ? items?.rating?.count : 0})
              </label>
            </div>
            <br></br>
            <div>
              {" "}
              <label className={classes.rating}>${items.price}</label>
            </div>

            <br></br>
            <div>
              <label className={classes.desc}>{items.description}</label>
            </div>

            <br></br>
            <div>
              <button
                onClick={() => {
                  showCountHandler();
                  added();
                  showItemHandler(items);
                }}
                className={classes.add}
              >
                Add to cart
              </button>
              <img src={wish} className={classes.wish} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductDetail;
