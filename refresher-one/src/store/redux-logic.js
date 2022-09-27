import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import cartActions from './cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartActions.reducer },
});

export default store;
