import classes from "./Header.module.css";
import React, { Fragment, useContext } from "react";
import cart from "../../assests/Cart.png";
import user from "../../assests/User.svg";
import mail from "../../assests/Mail.svg";
import phone from "../../assests/Phone.svg";
import dropDown from "../../assests/dropDown.svg";
import heart from "../../assests/Heart.svg";
import hetkoLogo from "../../assests/Hekto.svg";
import search from "../../assests/search.png";
import { DetailedViewContext } from "../../App";

function Header(props) {
  const { itemsCount, setItemsCount } = useContext(DetailedViewContext);

  // const {item, setItem} = useContext(DetailedViewContext);
  // const countCartItem = cartCtx.items.reduce((curCount, item) => {
  //   return curCount + item.amount;
  // }, 0);

  return (
    <Fragment>
      <div className={classes["grid-container"]}>
        <div className={classes.item1}>
          <label className={classes.space}></label>
          <div>
            {" "}
            <img className={classes.logo} src={mail} alt="email" />
            <label className={classes.label_Pos_Left}>xyz@gmail.com</label>
          </div>

          <div>
            <img className={classes.logo} src={phone} alt="call" />
            <label className={classes.label_Pos_Left}>+91 xxxxx xxxxx</label>
          </div>

          <label className={classes.space}></label>
          <label className={classes.space}></label>
          <div>
            {" "}
            <label className={classes.label_Pos_Right}>English</label>
            <img className={classes.dropDown} src={dropDown} alt="language" />
          </div>

          <div>
            {" "}
            <label className={classes.label_Pos_Right}>INR</label>
            <img className={classes.dropDown} src={dropDown} alt="currency" />
          </div>

          <div>
            {" "}
            <label className={classes.label_Pos_Right}>Login</label>
            <img className={classes.logo} src={user} alt="user-login" />
          </div>

          <div>
            {" "}
            <label className={classes.label_Pos_Right}>Wishlist</label>
            <img className={classes.logo} src={heart} alt="wishlist" />
          </div>

          <div>
            <img
              className={classes.cart}
              src={cart}
              onClick={props.onShowPopUp}
              alt="cart"
            />
            <span className={classes.badge}>{itemsCount}</span>
          </div>

          <label className={classes.space}></label>
        </div>
        <div className={classes.item2}>
          <label className={classes.space}></label>
          <img
            className={classes.mainLogo}
            src={hetkoLogo}
            alt="HETKO_LOGO"
            onClick={props.viewHome}
          />
              <label className={classes.space2} />
          <label className={classes.home} onClick={props.viewHome}>
            Home
          </label>
          <label className={classes.items}>Pages</label>
          <div>
            <label onClick={props.showCategories} className={classes.home}>
              Products
            </label>
            <img
              className={classes.productsDropDown}
              href="/Products"
              src={dropDown}
              alt="language"
            />
          </div>

          <label className={classes.items}>Blog</label>
          <label className={classes.items}>Shop</label>
          <label className={classes.items}>Contact</label>
          <label className={classes.space2} />

          <input
            className={classes.searchInput}
            type="text"
            placeholder="Search here"
          />
          <div className={classes.searchDiv}>
            <img className={classes.searchImg} src={search} alt="Search"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
