
import classes from './Footer.module.css';
import React, { Fragment } from 'react';
import hetkoLogo from "../../assests/Hekto.svg";

function Footer(props) {
  return (
    <Fragment>
     <div className={classes.mainDiv}>
     <div className={classes.tab}>
      <table>
        <tr>
          <th> <img className={classes.logo} onClick={props.viewHome} src={hetkoLogo} alt="HETKO_LOGO" /></th>
          <th>Categories</th>
          <th>Customer Care</th>
          <th>Pages</th>
        </tr>
        <tr>
          <td rowspan="2" className={classes.style}> <div className={classes.emailDiv}><input className={classes.searchInput}
            type="text"
            placeholder="Enter Email Address"
          />
          <div className={classes.sign}>
          <label className={classes.searchLabel}>Sign Up</label>
          </div>
          </div> 
         </td>
          <td>Laptops & Computers</td>
          <td>My Account</td>
          <td>Blog</td>
        </tr>
        <tr>
          
          <td>Cameras & Photography</td>
          <td>Discount</td>
          <td>Browse the Shop</td>
        </tr>
        <tr>
          <td>Contact Info</td>
          <td>Smart Phones & Tablets</td>
          <td>Returns</td>
          <td>Category</td>
        </tr>
        <tr>
          <td>17 Princess Road, London, Greater London NW1 8JR, UK</td>
          <td>Video Games & Consoles</td>
          <td>Orders History</td>
          <td>Pre-Built Pages</td>
        </tr>
        <tr>
          <td></td>
          <td>Waterproof Headphones</td>
          <td>Order Tracking</td>
          <td>Visual Composer Elements</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>WooCommerce Pages</td>
        </tr>
      </table>
    </div>
     </div>
     <div className={classes.smallDiv}>
      
     </div>
     
    </Fragment>
  );
}

export default Footer;
