import classes from './App.css';
import React, { Fragment,useState } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart';


function App() {
  const [details, setDetails] = useState(false);
  const [banner, setBanner] = useState("Home");
  

const showDetailsHandler = () => {
  setDetails(true);
  setBanner("Product_Details");
};
const showHomeHandler = () => {
  setDetails(false);
  setBanner("Home");
};

const [cartIsShown, setCartIsShown] = useState(false);
const showCartHandler = () => {
  setCartIsShown(true);
};

const hideCartHandler = () => {
  setCartIsShown(false);
};


  return (
    <Fragment>
     {cartIsShown && (
        <Cart onClose={hideCartHandler} />
      )}
<Header viewHome={showHomeHandler} onShowPopUp={showCartHandler} showBanner={showDetailsHandler}/>
{!details &&<Body viewDetails={showDetailsHandler} onShowPopUp={showCartHandler}/>}
{details && <ProductDetail/>}
<Footer viewHome={showHomeHandler}/>
     
    </Fragment>
  );
}

export default App;
