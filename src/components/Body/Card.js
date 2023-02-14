import React, { Fragment, useState, useContext } from "react";
import classes from "./Card.module.css";
import cart from "../../assests/quickAdd.png";
import wish from "../../assests/wishlist.png";
import { DetailedViewContext } from "../../App";
const Card = (props) => {
  const [display, setDisplay] = useState(0);
  const showButton = (e, id) => {
    e.preventDefault();
    setDisplay(id);
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay(0);
  };
  const { item, showItemHandler } = useContext(DetailedViewContext);

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
                    <button
                      onClick={() => {
                        showDetailsHandler(card.id);
                      }}
                      className={classes.details}
                      key={card.id}
                    >
                      View Details
                    </button>
                    <img
                      onClick={() => {
                        // props.setId(card.id);
                        showCountHandler();
                        added();
                        showItemHandler(card);
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
                  </Fragment>
                )}
              </div>

              <div className={classes.bottom}>
                <div className={classes.title}> {card.title}</div>
                <div className={classes.rating}>
                  {" "}
                  Rating: {card.rating.rate}
                </div>
                <div className={classes.cost}> $ {card.price}</div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Card;
