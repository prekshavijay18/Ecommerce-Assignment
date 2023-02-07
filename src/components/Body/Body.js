
import classes from './Body.module.css';
import React, { Fragment, useEffect, useState } from 'react';

function Body() {
  const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        useEffect(() => {
            fetch("https://fakestoreapi.com/products?limit=5")
           .then(res => res.json())
              .then(
                (result) => {
                  console.log(result);
                  setIsLoaded(true);
                  setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
          }, [])
        
  return (
    <Fragment>
     <div className={classes["grid-container"]}>
        <div>
            
        </div>
        <div className={classes.item1}>
          <label className={classes.featured}>Featured Products</label>
        </div>
        <div className={classes.item2}>
    
    {/* <Card data={items} /> */}
    
  </div>
        </div>
     
    </Fragment>
  );
}

export default Body;
