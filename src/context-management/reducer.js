import { clearFirebaseBasket } from "../firebase-config/firebase";
import { ACTIONS } from "./constants";

export const initialState = {
  basket: [],
  user: null,
  address: [],
  yourOrders: [],
  isModalOpen: false,
};

export const totalPrice = (basket) => {
  return (
    Math.round(
      basket?.reduce((amount, item) => item.price + amount, 0) * Math.pow(10, 2)
    ) / Math.pow(10, 2)
  );
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
          basketItems.id === action.item?.id &&
          basketItems.size === action.item?.size
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("can't remove product");
      }
      return { ...state, basket: newBasket };

    case ACTIONS.REMOVE_ALL_ITEMS_WITH_SAME_ID_FROM_BASKET:
      const duplicateBasket = [...state.basket];
      const modifiedBasket = duplicateBasket.filter(
        (items) => items.id !== action?.id
      );
      if (modifiedBasket.length === 0) {
        clearFirebaseBasket(state.user);
        return {
          ...state,
          basket: [],
        };
      }
      return {
        ...state,
        basket: modifiedBasket,
      };

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

    case ACTIONS.CHANGE_MODAL_STATE:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    case ACTIONS.ADD_OR_MODIFY_ADDRESS:
      let modifiedAddress = [...state.address];
      const isCurrentDefault = action.item?.isDefault;
      const elementIndex = state.address.findIndex(
        (element) => element.id === action?.item?.id
      );
      const availableDefaultAddressIndex = state.address.findIndex(
        (element) => element.isDefault === true
      );
      if (isCurrentDefault && availableDefaultAddressIndex >= 0) {
        modifiedAddress[availableDefaultAddressIndex] = {
          ...modifiedAddress[availableDefaultAddressIndex],
          isDefault: false,
        };
      }
      if (elementIndex < 0) {
        modifiedAddress.push(action.item);
      } else {
        modifiedAddress[elementIndex] = action.item;
      }

      return {
        ...state,
        address: modifiedAddress,
      };

    case ACTIONS.REMOVE_ADDRESS:
      const newAddressAfterAlter = [...state.address];
      const addressIndex = state.address.findIndex(
        (element) => element.id === action?.id
      );
      if (addressIndex >= 0) {
        newAddressAfterAlter.splice(addressIndex, 1);
      }
      return {
        ...state,
        address: newAddressAfterAlter,
      };

    case ACTIONS.ADD_TO_ORDER_HISTORY:
      let newYourOrders = [...state.yourOrders];
      if (action.items.length > 0) {
        action.items?.forEach((element) => {
          newYourOrders.push(element);
        });
      } else {
        newYourOrders = [];
      }
      return {
        ...state,
        yourOrders: newYourOrders,
      };
    //
    default:
      return state;
  }
};

export default reducer;
