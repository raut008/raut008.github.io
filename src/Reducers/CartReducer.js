import { addToCart, removeFromCart } from "../Actions/CartActions";
import { handleActions } from "redux-actions";

const initialState = {
    cart: [],
    Total: 0
};

export default handleActions(
    {
        [addToCart](state, action) {
            let addedItem = action.payload;
            let existItem = state.cart.find(item => item.id === action.payload.id)
            if (existItem) {
                addedItem.Quantity += 1;
                let total = state.Total + addedItem.Price;
                return {
                    ...state,
                    Total: total,
                }
            }
            else {
                addedItem.Quantity = 1;
                let newTotal = state.Total + addedItem.Price;
                return {
                    ...state,
                    cart: [...state.cart, addedItem],
                    Total: newTotal
                }
            }
        },
        [removeFromCart](state, action) {
            let addedItem = action.payload;
            let itemToBeRemoved = state.cart.find(item =>
                item.id === addedItem.id);
            console.log(itemToBeRemoved);
            let newCartItems = state.cart.filter(item =>
                addedItem.id !== item.id);
            return {
                ...state,
                cart: newCartItems,
            }
        }
    },
    initialState
)