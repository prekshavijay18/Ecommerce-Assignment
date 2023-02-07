import React, { Fragment } from "react";
import classes from "./Card.module.css";

import hetkoLogo from "../../assests/Hekto.svg";
const Card = (props) => {
  
  return (
    
<div className={classes.main}>
    
        {
        props.data.map((card) => {


          
          return (
            <Fragment>
              <div key={card.id}  className={classes["card-contrainer"]}>
                <div  className={classes.top}>
                <img className={classes.productImg} src={card.image} alt="products" />
                </div>
               
                <div className={classes.bottom} >
                <div className={classes.title}> {card.title}</div>
                <div className={classes.rating}> Rating: {card.rating.rate}</div>
                </div>
              </div>
            </Fragment>
           );
        })} 
      
    </div>
  );
};
export default Card;
