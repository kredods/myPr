import {
    applyMiddleware,
    combineReducers,
    createStore,
   } from 'redux';

export const workouts = (state = {}, action) => {
    switch (action.type) {
    case 'INIT_WORKOUTS':{
    return action.workouts;
    }
    default:
    return state;
    }
   };
   
   export const reducers = combineReducers({
    workouts,
   });