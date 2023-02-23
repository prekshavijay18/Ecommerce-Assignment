import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  item: [],
  totalPrice: 0,
  totalItems:0
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
        let total=0;
        let cartTotal=0;
      const cartItemIndex = state.item.findIndex(
        (x) => x.id == action.payload.id
      );
      if (cartItemIndex !== -1) {
        console.log("quatity", state.item[cartItemIndex])
        state.item[cartItemIndex].amount = parseInt(state.item[cartItemIndex].amount)+1;
       // action.payload?.amount?action.payload.amount:state.item[cartItemIndex].amount+1;
        state.item[cartItemIndex].totalPrice =
          state.item[cartItemIndex].amount * state.item[cartItemIndex].price;
      } else {
        state.item = [...state.item,{ ...action.payload, totalPrice: action.payload.price }];
      }
      console.log("Cart items",state.item)
      state.item.map(x=>{total=parseInt(total)+parseInt(x.amount);cartTotal+=(x.price*x.amount)});
     //state.item.map(x=>{total=parseInt(total)+parseInt(x?.amount? x.amount:1);cartTotal+=(x.price*x?.amount? x.amount:1)});
      state.totalItems=total;
      state.totalPrice=cartTotal;
      console.log("carttotal", cartTotal)
      
    },
    updateItems:(state, action)=>
    {
      let total=0;
      let cartTotal=0;
    const cartItemIndex = state.item.findIndex(
      (x) => x.id == action.payload.id
    );
    if (cartItemIndex !== -1) {
      console.log("quatity", state.item[cartItemIndex])
      state.item[cartItemIndex].amount = action.payload.amount;
      state.item[cartItemIndex].totalPrice =
        state.item[cartItemIndex].amount * state.item[cartItemIndex].price;
    }
    console.log("Cart items",state.item)
    state.item.map(x=>{total=parseInt(total)+parseInt(x.amount);cartTotal+=(x.price*x.amount)});
   //state.item.map(x=>{total=parseInt(total)+parseInt(x?.amount? x.amount:1);cartTotal+=(x.price*x?.amount? x.amount:1)});
    state.totalItems=total;
    state.totalPrice=cartTotal;
    console.log("carttotal", cartTotal)
    }
  },
});
export const {addToCart, updateItems}=cartSlice.actions;
export default cartSlice.reducer;