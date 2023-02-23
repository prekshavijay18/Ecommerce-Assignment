import "./App.css";
import React, { useState, createContext, useReducer } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/Products/ProductDetail";
import Cart from "./components/Cart/Cart";
import Banner from "./components/Header/Banner";
import ProductList from "./components/Products/ProductList";
import Categories from "./components/Products/Categories";
import { minWidth } from "@mui/system";

export const DetailedViewContext = createContext({
  setProductCategories: () => {},
  showProductsHandler: (card) => {},
  productCategories: "",
  id: 0,
  setId: () => {},
  showDetailsHandler: (id) => {},
  itemsCount: 0,
  setItemsCount: () => {},
  item: [],
  total: 0,
  setItem: () => {},
  showItemHandler: () => {},
  qtyCount: 1,
  setQtyCount: () => {},
  addItemHandler: (item) => {},
  removeItemHandler: (id) => {},
});

function App() {
  const [details, setDetails] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [item, setItem] = useState([]);
  const [categories, setCategories] = useState(false);
  const [productCategories, setProductCategories] = useState("");
  const [products, setProducts] = useState(false);
  const [banner, setBanner] = useState("Home");
  const [id, setId] = useState("");

  const addItemHandler = (item) => {
    //dispatchCartState({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    // dispatchCartState({ type: "REMOVE", id: id });
  };

  const showCategoryHandler = () => {
    setDetails(false);
    setProducts(false);
    setCategories(true);
    setCartIsShown(false);

    setBanner("Categories");
  };
  const showCountHandler = () => {
    // const count=itemsCount+1;
    // setItemsCount(count);

    setItemsCount((item) => {
      return item + 1;
    });
  };

  const showItemHandler = (item) => {
    setItem((val) => {
      console.log("myCValue", val);
      return [...val, item];
    });
  };
  const showProductsHandler = (card) => {
    setDetails(false);
    setProducts(true);
    setCategories(false);

    setCartIsShown(false);
    setBanner("Products_List");
    setProductCategories(card.title);
  };
  const showDetailsHandler = (id) => {
    setDetails(true);
    setProducts(false);

    setCartIsShown(false);
    setBanner("Product_Details");
    setId(id);
  };
  const showHomeHandler = () => {
    setDetails(false);
    setProducts(false);
    setCategories(false);

    setCartIsShown(false);
    setBanner("Home");
  };

  console.log("cart", item);

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    // if (itemsCount > 0) {
      setBanner("Cart");
      setCartIsShown(true);
    // } else {
      // setBanner("Home");
      // alert("Add items to cart");
      // setCartIsShown(false);
   // }

    setDetails(false);
    setProducts(false);
    setCategories(false);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div style={{ minWidth: "1300px" }}>
      {" "}
      <DetailedViewContext.Provider
        value={{
          id,
          setId,
          productCategories,
          setProductCategories,
          showProductsHandler,
          showDetailsHandler,
          itemsCount,
          setItemsCount,
          showCountHandler,
          item,
          setItem,
          showItemHandler,
          addItemHandler,
          removeItemHandler,
        }}
      >
        <Header
          viewHome={showHomeHandler}
          showCategories={showCategoryHandler}
          onShowPopUp={showCartHandler}
          onAdd={showCountHandler}
          addToCart={showItemHandler}
        />
        {banner === "Home" && (
          <Banner showBanner={showDetailsHandler} Name="Home" />
        )}
        {banner === "Product_Details" && (
          <Banner
            viewHome={showHomeHandler}
            showBanner={showDetailsHandler}
            showCategories={showCategoryHandler}
            Name="Product_Details"
          />
        )}
        {banner === "Products_List" && (
          <Banner
            viewHome={showHomeHandler}
            showCategories={showCategoryHandler}
            showBanner={showDetailsHandler}
            Name="Products_List"
          />
        )}
        {banner === "Categories" && (
          <Banner
            viewHome={showHomeHandler}
            showBanner={showDetailsHandler}
            Name="Categories"
          />
        )}
        {banner === "Cart" && (
          <Banner
            viewHome={showHomeHandler}
            showBanner={showCartHandler}
            Name="Cart"
          />
        )}

        {!cartIsShown && !details && !products && !categories && (
          <Body
            viewDetails={showDetailsHandler}
            onShowPopUp={showCartHandler}
            addToCart={showItemHandler}
          />
        )}
        {details && !products && !cartIsShown && (
          <ProductDetail addToCart={showItemHandler} />
        )}
        {categories && !details && !products && !cartIsShown && (
          <Categories showProducts={showProductsHandler} />
        )}
        {products && !details && !categories && !cartIsShown && (
          <ProductList
            viewDetails={showDetailsHandler}
            onShowPopUp={showCartHandler}
          />
        )}
        {cartIsShown && !details && !products && !categories && (
          <Cart data={item} />
        )}
        <Footer viewHome={showHomeHandler} />
      </DetailedViewContext.Provider>
    </div>
  );
}

export default App;
