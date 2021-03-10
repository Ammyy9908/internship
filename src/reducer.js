export const intialState = {
  basket: [{ id: null, title: null, color: null }],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  let amt = 0;
  for (let i = 0; i < basket.length; i++) {
    amt += Number(basket[i].price);
  }
  return amt;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [action.item, ...state.basket],
      };

    case "REMOVE_FROM_BASKET":
      // const index = state.basket.findIndex(
      //   (basketItem) => basketItem.id === action.id
      // );

      let color = action.color;
      let newBasket = [];
      newBasket = state.basket.splice(1);

      return {
        ...state,
        basket: newBasket,
        flagRemove: state.flagRemove,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
