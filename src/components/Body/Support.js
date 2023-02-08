import React, { Fragment, useState } from "react";
import classes from "./Support.module.css";
const Support = (props) => {
  return (
    <div className={classes.main}>
      {props.data.map((card) => {
        return (
          <Fragment>
            <div key={card.id} className={classes["card-contrainer"]}>
              <div className={classes.top}>
                <img className={classes.productImg} src={card.image}></img>
              </div>

              <div className={classes.title}> {card.title}</div>

              <div className={classes.cost}> {card.desc}</div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Support;
