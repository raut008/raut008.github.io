import { handleCategoryChange } from "../Actions/DropDownActions/";
import { handleActions } from "redux-actions";

const defaultState = {
    category: "Show All",
};

export default handleActions(
    {
        [handleCategoryChange](state, action) {
            return {
                ...state,
                category: action.payload
            }
        }

    },
    defaultState
)

