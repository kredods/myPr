import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WorkoutDetail } from './src/components/modals/workout.detail.component';
import SecondaryNavigator from './src/components/tabbed.navigation.component';
import { Provider, connect } from 'react-redux';
import { initAction } from './src/redux/actions';
import { store } from './src/redux/store';
const MainNavigator = StackNavigator({
  Tabs: {
    screen: SecondaryNavigator
  },
  WorkoutDetail: {
    screen: WorkoutDetail
  }
},
  {
    headerMode: 'none',
    mode: 'modal'

  }
);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
      );
  }
}


const mapStateToProps = (state) => ({
  workouts: state.workouts || "Please Wait...",
});

const mapDispatchToProps = (dispatch) => {
  return {
    initAction: (workouts) => {
      dispatch(initAction(workouts))
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavigator);


