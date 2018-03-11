import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WorkoutDetail } from './src/components/modals/workout.detail.component';
import SecondaryNavigator from './src/components/tabbed.navigation.component';

export default (
MainNavigator = StackNavigator({
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
));



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
