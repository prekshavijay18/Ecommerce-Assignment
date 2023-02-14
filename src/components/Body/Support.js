import React, { Fragment, useContext, useState } from "react";
import { DetailedViewContext } from "../../App";
import ProductList from "../Products/ProductList";
import classes from "./Support.module.css";

const Support = (props) => {
  const {showProductsHandler} = useContext(DetailedViewContext);
  return (
    <div className={classes.main}>
      {props.data.map((card) => {
        return (
          <Fragment>
            <div key={card.id} className={classes["card-contrainer"]}  onClick={() => showProductsHandler(card)}>
              <div className={classes.top}>
                <img className={classes.productImg} src={card.image}></img>
              </div>

              <div className={classes.title}> {card.title}</div>

              <div className={classes.cost}> {card.desc}</div>
            </div>
            {/* {showProds&& <ProductList title={card.title}/>} */}
          </Fragment>
        );
      })}
    </div>
  );
};
export default Support;
