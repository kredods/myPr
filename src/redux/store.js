import {
    createStore
} from 'redux';
import {
    reducers
} from './reducers';
import {
    AsyncStorage
} from 'react-native';
import {
    MockData
} from '../mock.data';

export  function configureStore(initialState = {}) {
      //  initialState.workouts = MockData.Workouts;
        const store = createStore(
            reducers,
            initialState
        )
        return store;
};

export const store = configureStore();