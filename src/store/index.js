import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      state.push(action.payload);
    },
    removeItemFromCart(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export { store };
export const { addItemToCart } = cartSlice.actions;
