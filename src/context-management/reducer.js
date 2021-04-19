import { ACTIONS } from "./constants";

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case ACTIONS.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItems) => basketItems.id === action.id
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

    default:
      return state;
  }
};

export default reducer;
