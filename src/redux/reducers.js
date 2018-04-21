import { applyMiddleware, combineReducers, createStore,
} from 'redux';

export const workouts = (state = {}, action) => {
    switch (action.type) {
        case 'INIT_WORKOUTS': {
            return action.workouts;
        }
        case 'ADD_WORKOUT': {
            action.workout.setGroups = [];
            return [
                ...state.concat(action.workout)
            ]
        }
        default:
            return state;
    }
};

export const reducers = combineReducers({
    workouts,
});