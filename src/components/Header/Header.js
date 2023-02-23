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
import { useSelector } from "react-redux";

function Header(props) {
  // const { itemsCount, setItemsCount } = useContext(DetailedViewContext);
  const totalItems = useSelector((state) => state.cart.totalItems);
  // const {item, setItem} = useContext(DetailedViewContext);
  // const countCartItem = cartCtx.items.reduce((curCount, item) => {
  //   return curCount + item.amount;
  // }, 0);

  return (
    <Fragment>
      <div className={classes["grid-container"]}>
        <div className={classes.item1}>
          <div className={classes.header1Left}>
            <div className={classes.emailDiv}>
              <img className={classes.emailImg} src={mail} alt="email" />
              <label>xyz@gmail.com</label>
            </div>

            <div className={classes.phoneDiv}>
              <img className={classes.phoneImg} src={phone} alt="call" />
              <label>+91 xxxxx xxxxx</label>
            </div>
          </div>

          <div className={classes.header1Right}>
            <div className={classes.langDiv}>
              <label>English</label>
              <img className={classes.langImg} src={dropDown} alt="language" />
            </div>

            <div className={classes.currDiv}>
              {" "}
              <label>INR</label>
              <img className={classes.currImg} src={dropDown} alt="currency" />
            </div>

            <div className={classes.loginDiv}>
              {" "}
              <label>Login</label>
              <img className={classes.loginImg} src={user} alt="user-login" />
            </div>

            <div className={classes.wishListDiv}>
              {" "}
              <label>Wishlist</label>
              <img className={classes.wishListImg} src={heart} alt="wishlist" />
            </div>

            <div className={classes.cartDiv}>
              <img
                className={classes.cartImg}
                src={cart}
                onClick={props.onShowPopUp}
                alt="cart"
              />
              <span className={classes.badge}>{totalItems}</span>
            </div>
          </div>
        </div>
        <div className={classes.item2}>
          <div className={classes.header2}>
            <img
              className={classes.mainLogo}
              src={hetkoLogo}
              alt="HETKO_LOGO"
              onClick={props.viewHome}
            />
            <label className={classes.home} onClick={props.viewHome}>
              Home
            </label>
            <label>Pages</label>

            <div className={classes.productsDiv}>
              <label onClick={props.showCategories} className={classes.products}>Products</label>
              <img
                className={classes.productsDropDown}
                href="/Products"
                src={dropDown}
                alt="language"
              />
            </div>

            <label className={classes.blog}>Blog</label>
            <label className={classes.blog}>Shop</label>
            <label className={classes.blog}>Contact</label>
          </div>

          <div
            style={{
              display: "flex",
              padding: "0px 115px 0px 0px",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <input
              className={classes.searchInput}
              type="text"
              placeholder="Search here"
            />
            <img className={classes.searchImg} src={search} alt="Search"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
