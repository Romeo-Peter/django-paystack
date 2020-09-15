import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
} from "../actions/actionTypes";

export default function cartReducer(state = [], action) {
  switch (action.types) {
    case ADD_ITEM_TO_CART:
      const {
        productId,
        productName,
        productPrice,
        productImage,
      } = action.payload.item;

      return {
        cart: [
          ...state.cart,
          {
            productId: productId,
            productName: productName,
            productPrice: productPrice,
            productImage: productImage,
          },
        ],
      };
    case DELETE_ITEM_FROM_CART:
      return {
        cart: [
          ...state.cart,
          state.cart.filter((item) => item.id !== action.payload),
        ],
      };
    default:
      return state;
  }
}
