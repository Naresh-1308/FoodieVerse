import React,{createContext, useContext, useEffect, useReducer} from "react";
import { mealReducer } from "../reducers/mealReducers";
import {startFetchCategories} from "../actions/mealsActions"


const initialState={
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false
}


const MealContext = createContext({});

export const MealProvider = ({children}) => {
    const [state, dispatch] = useReducer(mealReducer, initialState);

    useEffect (() => {
            startFetchCategories(dispatch);
    },[]);

    return (
        <MealContext.Provider value ={{
            ...state,
            dispatch,
            startFetchCategories
        }}>
            {children}
        </MealContext.Provider>
    )
}


export const useMealContext = () => {
    return useContext(MealContext);
}