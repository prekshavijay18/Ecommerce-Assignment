import classes from "./Banner.module.css";
import React, { Fragment } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import promo from "../../assests/promotional.png";
import banner2 from "../../assests/Banner2.jpg";
import banner3 from "../../assests/Banner3.webp";
const images=[promo,banner2,banner3];
function Banner() {
    return (
      <Fragment>
        {/* <div>
        <img className={classes.banner} src={promo} alt="promo"/> 
        </div> */}

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
        </Fragment>
        );
    }
    
    export default Banner;
    