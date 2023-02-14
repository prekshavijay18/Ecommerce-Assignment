import classes from "./Body.module.css";
import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import Card2 from "./Card2";
import support1 from "../../assests/24-hours-support 1.png";
import support2 from "../../assests/cashback 1.png";
import support3 from "../../assests/free-delivery 1.png";
import support4 from "../../assests/premium-quality 1.png";
import Support from "./Support";

function Body(props) {
  const support = [
    {
      id: 1,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: support1
    },
    {
      id: 2,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: support2},
    {
      id: 3,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: support3},
    {
      id: 4,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: support4}
  ];
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then(
        (result) => {
          const newArr = result.map(v => ({...v, amount: 2}))
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
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          const newArr = result.map(v => ({...v, amount: 1}))
          console.log(result);
          console.log(newArr);
          const newResult = newArr.slice(0, 6);
          setIsLoaded(true);
          setItems2(newResult);
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
  const [toggle, setToggle] = useState(false);
  const showToggleHandler = () => {
    setToggle(true);
  
   
  };
  const showToggleBackHandler = () => {
    setToggle(false);
  };
  return (
    <Fragment>
      <div className={classes["grid-container"]}>
        <div></div>
        <div className={classes.item1}>
          <label className={classes.featured}>Featured Products</label>
        </div>
        <div className={classes.item2}>
          <Card viewDetails={props.viewDetails} onShowPopUp={props.onShowPopUp} data={items.slice(0,4)} />
        </div>
        <div className={classes.item3}>
          <label className={classes.featured}>Latest Products</label>
          <div className={classes.tab}>
            <label className={classes.items} onClick={showToggleBackHandler}>New Arrival</label>
            <label className={classes.items}>Best Seller</label>
            <label className={classes.items} onClick={showToggleHandler}>Featured</label>
            <label className={classes.items}>Special Offer</label>
          </div>
        </div>
        <div className={classes.item4}>
        {toggle&&<Card2 viewDetails={props.viewDetails} onShowPopUp={props.onShowPopUp} data={items.slice(0,6)}/>}
          {!toggle&&<Card2 viewDetails={props.viewDetails} onShowPopUp={props.onShowPopUp} data={items2} />}

       
        </div>
        <div className={classes.item5}>
          <label className={classes.featured}>What Shopex Offer!</label>
        </div>
        <div className={classes.item6}>
          <Support data={support} />
        </div>
      </div>
    </Fragment>
  );
}

export default Body;
