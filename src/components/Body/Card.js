import React, { Fragment } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  
  return (
    
<div className={classes.main}>
    
        {
        props.data.map((x) => {
const card=x._source;
console.log(card.body[0]);

          const totalAmount = `€${card.simAmount[0].toFixed(2)}`;
          return (
            <Fragment>
              <div  key={card.id}  className={classes["card-contrainer"]}>
                <div  className={classes.top}>
                  <div className={classes.simType} >{card.title[0]}</div>
                  <div  className={classes.simValue} >{card.bandwidth[0]}</div>
                  <div  className={classes.dataValue} >data</div>
                  

                </div>
                <div  className={classes.middle}>
                  <div className={classes.simAmount}>{totalAmount}</div>
                  <div  className={classes.simValidity} >{card.simValidity}</div>
                  <button onSubmit={handleClick} className={classes.orderButton} onClick={props.showPopUp}>
                    <div className={classes.orderButtonText}>
                    Order Sim
                        </div></button>
                </div>
                <div className={classes.bottom} >
                <div className={classes.nationalData} dangerouslySetInnerHTML={{ __html: card.body[0]}} />
                </div>
              </div>
            </Fragment>
          );
        })}
      
    </div>
  );
};
export default Card;
