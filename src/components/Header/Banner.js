import classes from "./Banner.module.css";
import React, { Fragment } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import promo from "../../assests/promotional.png";
import banner2 from "../../assests/Banner2.jpg";
import banner3 from "../../assests/Banner3.webp";
const images = [promo, banner2, banner3];
function Banner(props) {
  return (
    <Fragment>
      {/* <div>
        <img className={classes.banner} src={promo} alt="promo"/> 
        </div> */}

      {props.Name === "Home" && (
        <div className={classes.box}>
          <Carousel
            autoPlay
            useKeyboardArrows={true}
            stopOnHover={true}
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            interval="2000"
            transitionTime="1200"
            showThumbs={false}
          >
            {images.map((URL, index) => (
              <div className={classes.slide}>
                <img alt="sample_file" src={URL} key={index} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
      {props.Name === "Product_Details" && (
        <div className={classes.navDiv}>
          {" "}
          <label className={classes.featured}>Product Details</label>
          <div className={classes.nav}>
          <label className={classes.viewHome} onClick={props.viewHome}>Home ></label>
          <label className={classes.act} >Product Details</label>
          </div>
        </div>
      )}
       {props.Name === "Products_List" && (
        <div className={classes.navDiv}>
          {" "}
          <label className={classes.featured}>Products</label>
          <div className={classes.nav}>
          <label className={classes.viewHome} onClick={props.viewHome} >Home ></label>
          <label className={classes.viewHome} onClick={props.showCategories} >Categories ></label>
          <label className={classes.act} >Products</label>
          </div>
        </div>
      )}
       {props.Name === "Categories" && (
        <div className={classes.navDiv}>
          {" "}
          <label className={classes.featured}>Products</label>
          <div className={classes.nav}>
          <label className={classes.viewHome} onClick={props.viewHome} >Home ></label>
          <label className={classes.act} >Categories</label>
          </div>
        </div>
      )}
          {props.Name === "Cart" && (
        <div className={classes.navDiv}>
          {" "}
          <label className={classes.featured}>Shopping Cart</label>
          <div className={classes.nav}>
          <label className={classes.viewHome} onClick={props.viewHome} >Home ></label>
          <label className={classes.act} >Cart</label>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Banner;
