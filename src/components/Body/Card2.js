import React, { Fragment, useState, useContext } from "react";
import classes from "./Card2.module.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import cart from "../../assests/quickAdd.png";
import wish from "../../assests/wishlist.png";
import { DetailedViewContext } from "../../App";
const Card2 = (props) => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(0);
  const showButton = (e, id) => {
    e.preventDefault();
    setDisplay(id);
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay(0);
  };
  const added = () => {
    alert("Added to cart");
  };
  const { showDetailsHandler } = useContext(DetailedViewContext);
  const { showCountHandler } = useContext(DetailedViewContext);
  const { item, showItemHandler } = useContext(DetailedViewContext);
  const addCartItem = (card) => {
    dispatch(addToCart({ ...card }));
  };
  return (
    <div className={classes.main}>
      {props.data.map((card) => {
        return (
          <Fragment>
            <div
              key={card.id}
              onMouseEnter={(e) => showButton(e, card.id)}
              onMouseLeave={(e) => hideButton(e)}
              className={classes["card-contrainer"]}
            >
              <div className={classes.top}>
                <img className={classes.productImg} src={card.image}></img>
                {display == card.id && (
                  <Fragment>
                     <img
                      onClick={() => {
                        showCountHandler();
                        added();
                        addCartItem(card);
                      }}
                      src={cart}
                      className={classes.quickadd}
                      key={card.id}
                    ></img>
                    <img
                      src={wish}
                      className={classes.wishlist}
                      key={card.id}
                    ></img>
                    <button
                      onClick={() => {
                        showDetailsHandler(card.id);
                      }}
                      className={classes.details}
                      key={card.id}
                    >
                      View Details
                    </button>
                   
                  </Fragment>
                )}
              </div>

              <div className={classes.bottom}>
                <div className={classes.title}> {card.title}</div>
               
                <label className={classes.cost}> ${card.price}</label>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Card2;
