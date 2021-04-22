
import { ACTIONS } from "./constants";

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_BASKET:
      const addIndex = state?.basket?.findIndex(
        (basketItems) =>
          basketItems.id === action.item?.id &&
          basketItems.size === action.item?.size
      );
      let addNewBasket = [...state.basket];
      if (addIndex >= 0) {
        addNewBasket.splice(addIndex, 0, action.item);
        return {
          ...state,
          basket: addNewBasket,
        };
      }
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case ACTIONS.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItems) =>
          basketItems.item?.id === action.id &&
          basketItems.size === action.item?.size
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("can't remove product");
      }
      return { ...state, basket: newBasket };

    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case ACTIONS.CLEAR_BASKET:
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};


export const totalPrice = (basket) => {
  return Math.round(basket?.reduce((amount, item) => item.price + amount, 0) * Math.pow(10, 2)) / Math.pow(10, 2);
}

export default reducer;
