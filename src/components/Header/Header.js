import classes from "./Header.module.css";
import React, { Fragment } from "react";
import cart from "../../assests/Cart.png";
import user from "../../assests/User.svg";
import mail from "../../assests/Mail.svg";
import phone from "../../assests/Phone.svg";
import dropDown from "../../assests/dropDown.svg";
import heart from "../../assests/Heart.svg";
import hetkoLogo from "../../assests/Hekto.svg";
import search from "../../assests/search.png";
import Banner from "./Banner";

function Header(props) {
  return (
    <Fragment>
      <div className={classes["grid-container"]}>
        <div className={classes.item1}>
          <label className={classes.space}></label>
          <img className={classes.logo} src={mail} alt="email" />
          <label className={classes.download}>xyz@gmail.com</label>

          <img className={classes.logo} src={phone} alt="call" />
          <label className={classes.locator}>+91 xxxxx xxxxx</label>
          <label className={classes.space}></label>
          <label className={classes.language}>English</label>
          <img className={classes.logo} src={dropDown} alt="language" />

          <label className={classes.language}>INR</label>
          <img className={classes.logo} src={dropDown} alt="currency" />

          <label className={classes.language}>Login</label>
          <img className={classes.logo} src={user} alt="user-login" />

          <label className={classes.language}>Wishlist</label>
          <img className={classes.logo} src={heart} alt="wishlist" />

          <img className={classes.logo} src={cart} onClick={props.onShowPopUp} alt="cart" />
          <label className={classes.space}></label>
        </div>
        <div className={classes.item2}>
          <label className={classes.space}></label>
          <img className={classes.logo} src={hetkoLogo} alt="HETKO_LOGO" onClick={props.viewHome}/>
          <label className={classes.items} onClick={props.viewHome}>Home</label>
          <label className={classes.items}>Pages</label>
          <label className={classes.items}>Products</label>
          <label className={classes.items}>Blog</label>
          <label className={classes.items}>Shop</label>
          <label className={classes.items}>Contact</label>
          <label className={classes.items} />
          <input className={classes.searchInput}
            type="text"
            placeholder="Search here"
          />
          <div className={classes.searchDiv}><img className={classes.searchImg} src={search} alt="Search" ></img></div>
         
       
        </div>
      </div>
      <Banner></Banner>
    </Fragment>
  );
}

export default Header;
