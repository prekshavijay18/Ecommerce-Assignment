import classes from "./Categories.module.css";
import React, { Fragment, useState, useEffect } from "react";
import Support from "../Body/Support";
const support = [
    {
      id: 1,
      title: "Electronics",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image:
        "https://img.freepik.com/premium-vector/gadgets-electronic-large-set_146957-836.jpg",
    },
    {
      id: 2,
      title: "Jewelery",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image:
        "https://media.gettyimages.com/id/475367148/video/gold-jewelry-close-up.jpg?s=640x640&k=20&c=EpDT71Jq69Rm9V2uO8BcFWxtuJhgH3SeCB9rR524oCE=",
    },
    {
      id: 3,
      title: "Men's clothing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image:
        "https://i.pinimg.com/originals/f8/3f/4d/f83f4d32d123efac1b9db0d1661387e5.jpg",
    },
    {
      id: 4,
      title: "Women's clothing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image:
        "https://previews.123rf.com/images/tatianakost/tatianakost1605/tatianakost160500056/56353985-spring-fashion-seamless-pattern-vector-hand-drawing-womens-clothing-doodle-sketch-background-women-w.jpg",
    },
  ];
function Categories(props) {
 
  return (
    <Fragment>
   
      <div className={classes.divide}>
        <div>
       
          <Support showProducts={props.showProducts}
            data={support}
          />
        </div>
      </div>
     
    </Fragment>
  );
} 

export default Categories;
