import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (currentStateSnapshot, yourAction) => {
  if (yourAction.type === 'ADD') {
    const updatedTotalAmount =
      currentStateSnapshot.totalAmount +
      yourAction.item.price * yourAction.item.amount;

    const existingCartItemIndex = currentStateSnapshot.items.findIndex(
      (item) => item.id === yourAction.item.id
    );
    const existingCartItem = currentStateSnapshot.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + yourAction.item.amount,
      };
      updatedItems = [...currentStateSnapshot.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = currentStateSnapshot.items.concat(yourAction.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (yourAction.type === 'REMOVE') {
    const existingCartItemIndex = currentStateSnapshot.items.findIndex(
      (item) => item.id === yourAction.id
    );
    const existingCartItem = currentStateSnapshot.items[existingCartItemIndex];
    const updatedTotalAmount =
      currentStateSnapshot.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = currentStateSnapshot.items.filter(
        (item) => item.id !== yourAction.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...currentStateSnapshot.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (yourAction.type === 'CLEAR') {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
