import React, { Fragment, useState, useContext } from "react";
import classes from "./Card.module.css";
import cart from "../../assests/quickAdd.png";
import wish from "../../assests/wishlist.png";
import { DetailedViewContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const Card = (props) => {
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
  //const { item, showItemHandler } = useContext(DetailedViewContext);
  const addCartItem = (card) => {
    dispatch(addToCart({ ...card }));
  };

  const item = useSelector((state) => state.cart.item);
  console.log("inside card", item);
  const added = () => {
    alert("Added to cart");
  };
  const { showDetailsHandler } = useContext(DetailedViewContext);
  const { showCountHandler } = useContext(DetailedViewContext);
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
                        // props.setId(card.id);
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
                <label className={classes.title}> {card.title}</label>
                <label className={classes.rating}>
                  
                  Rating: {card.rating.rate}
                </label>
                <label className={classes.cost}> $ {card.price}</label>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Card;
