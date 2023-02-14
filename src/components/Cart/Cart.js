import { Fragment, useState, useContext } from "react";
import classes from "./Cart.module.css";
import { DetailedViewContext } from "../../App";

const Cart = (props) => {
  const { qtyCount, setQtyCount } = useContext(DetailedViewContext);

  const canBeSubmitted = () => {
    var val = document.getElementById("ship").checked;
    var btnval = document.getElementById("btn");
    btnval.disabled = true;
    var val2 = btnval.disabled;
    if (val) {
      document.getElementById("btn").setAttribute("disabled", false);
    }
    alert(val, val2);
  };
  const qty = () => {
    setQtyCount(document.getElementById("qty").value);
  };
  return (
    <Fragment onClose={props.onClose}>
      <div className={classes.mainDiv}>
        <div>
          <table className={classes.tab2}>
            <tr>
              <th className={classes.cartTh}> Product</th>
              <th className={classes.cartTh}> Price</th>
              <th className={classes.cartTh}>Quantity</th>
              <th className={classes.cartTh}>Total</th>
            </tr>
            {props.data.map((x) => {
              return (
                <tr>
                  <td className={classes.cartTd}>
                    <div className={classes.prodDiv}>
                      <img className={classes.prodImg} src={x.image} />
                      <br></br>
                      <label className={classes.title}>
                        {x.title.substring(0, 15)}
                      </label>
                    </div>
                  </td>
                  <td className={classes.cartTd}>
                    <label className={classes.price}>${x.price}</label>
                  </td>
                  <td className={classes.cartTd}>
                    <input
                      id="qty"
                      className={classes.qty}
                      type="number"
                      min="1"
                      max="5"
                      step="1"
                      defaultValue={x.amount}
                      onChange={qty}
                    />
                  </td>
                  <td className={classes.cartTd}>
                    <label className={classes.tot}>${x.price}</label>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <label className={classes.totName}>Cart Totals</label>
        <div className={classes.totalDiv}>
          <div>
            <div>
              <label className={classes.subTot}>Subtotal:</label>
              <label className={classes.subTotVal}>$280.00</label>
            </div>

            <br></br>
            <div>
              <label className={classes.Tot}>Total:</label>
              <label className={classes.TotVal}>$300.00</label>
            </div>
            <div className={classes.shipDiv}>
              <input
                type="checkbox"
                id="ship"
                name="ship"
                value="Shipping"
                onChange={canBeSubmitted}
              />
              <label className={classes.shipInput}>
                Shipping & taxes calculated at checkout
              </label>
            </div>
            <div>
              <button id="btn" className={classes.proceed}>
                <label>Proceed</label>
              </button>
            </div>
          </div>
        </div>

        <label className={classes.space}> </label>
      </div>
    </Fragment>
  );
};
export default Cart;
