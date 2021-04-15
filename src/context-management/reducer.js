import { ACTIONS } from "./constants";

export const initialState = {
  basket: [],
};

// export const basketLength=(basket)=>{
//   return 
// }

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
