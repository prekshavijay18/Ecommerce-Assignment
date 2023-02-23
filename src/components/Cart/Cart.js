import { Fragment, useState, useContext,useRef } from "react";
import classes from "./Cart.module.css";
import { DetailedViewContext } from "../../App";
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { updateItems } from "../../redux/slice/cartSlice";

const Cart = (props) => {
  const dispatch=useDispatch();
  const { qtyCount, setQtyCount } = useContext(DetailedViewContext);
  const [amtIsValid,setAmtIsValid]=useState(true);
    const amountInputRef= useRef();
    const cartItems= useSelector(state=>state.cart.item)
    const totalPrice= useSelector(state=>state.cart.totalPrice)
    const total=totalPrice.toFixed(2);
const cartTotal=totalPrice+25;
    const updateCart=(event,item)=>
    {
const {value}= event.target;

dispatch(updateItems({...item,amount:value}))
    }
  const submitHandler = event => {
    event.preventDefault();
    const eneteredAmount=amountInputRef.current.value;
    const eneteredAmountNO=+eneteredAmount;
    if(eneteredAmount.trim().length===0||eneteredAmountNO<1||eneteredAmountNO>5)
    {
        setAmtIsValid(false);
        return;
    }
  }
  const canBeSubmitted = () => {
    var val = document.getElementById("ship").checked;
    var btnval = document.getElementById("btn");
    btnval.disabled = false;
    // if (val) {
    //   document.getElementById("btn").setAttribute("enabled", true);
    // }
    // alert(val, val2);
  };
console.log("insideCart",cartItems)

  return (
    <Fragment onClose={props.onClose}>
      <div className={classes.mainDiv}>
        
          <table className={classes.tab2}>
            <tr>
              <th className={classes.cartTh}> Product</th>
              <th className={classes.cartTh}> Price</th>
              <th className={classes.cartTh}>Quantity</th>
              <th className={classes.cartTh}>Total</th>
            </tr>
            {cartItems.map((x) => {
              
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
                    // ref={amountInputRef}
                      id="qty"
                      className={classes.qty}
                      type="number"
                      min="1"
                      step="1"
                      defaultValue={x.amount}
                      onChange={(event)=>updateCart(event, x)}
                    />
                  </td>
                  <td className={classes.cartTd}>
                    <label className={classes.tot}>${x.price * x.amount}</label>
                  </td>
                </tr>
              );
            })}
          </table>
        <div className={classes.totDiv}>
        <label className={classes.totName}>Cart Totals</label>
        <div className={classes.totalDiv}>
          <div>
            <div  className={classes.subTot}>
              <label>Subtotal:</label>
              <label className={classes.subTotVal}>${total}</label>
            </div>

            <br></br>
            <div className={classes.subTot}>
              <label>Total:</label>
              <label className={classes.subTotVal}>${cartTotal}</label>
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
        </div>
      </div>
    </Fragment>
  );
};
export default Cart;
