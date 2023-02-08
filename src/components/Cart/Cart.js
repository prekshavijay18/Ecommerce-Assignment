import { useState } from "react";
//import classes from "./Cart.module.css";
import Modal from "./Modal";

const Cart = (props) => {

  return (
    <Modal onClose={props.onClose}>
    <div>QUICK ADD</div>
    
    </Modal>
  );
};
export default Cart;
