import axios from "../api/axios";
import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN
} from "./actions.js";


import { CATEGORIES_URL } from "../utils/constants";

export const startFetchCategories = async(dispatch) => {
    try{
        dispatch({type: FETCH_CATEGORY_BEGIN});
        const response = await axios.get(`${CATEGORIES_URL}`);
        
        dispatch({type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories});
    }

    catch(error) {
        dispatch({type: FETCH_CATEGORY_ERROR, payload: error.message});
    }

}

export const startFetchSingleMeal = async(dispatch, id) => {
    try{
        dispatch({ type: FETCH_SINGLE_MEAL_BEGIN });
        const respone = await axios.get(`${}`)
    }
}