import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import React from 'react';
import { Highlights } from './pages/highlights.page.component';
import { Text } from 'native-base';
import { BottomTab } from './tabbar.component'
import { Workouts } from './pages/workouts.page.component';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default (
SecondaryNavigator = TabNavigator({
    Highlights: {
        screen: StackNavigator({
            HighlightsPage: {
                screen: Highlights
            },
            WorkoutsPage: {
                screen: Workouts
            }
        }, {
            headerMode: 'float'
        }),
    },
    Workouts: {
        screen: StackNavigator({
            WorkoutsPage: {
                screen: Workouts
            },
            HighlightsPage: {
                screen: Highlights
            },
        }, {
            headerMode: 'float'
        })
    }

}, {
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let iconArray = ['star', 'dumbbell', 'medium', 'human-handsdown'];
            let iconName;
            if (routeName === 'Highlights') {
                iconName = 'star';
            } else if (routeName === 'Workouts') {
                iconName = 'dumbbell';
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <MaterialIcon name={ iconName } size={ 25 } color={ tintColor } />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
    },
    tabBarPosition: "bottom",
    // tabBarComponent: props => {
    //     return (
    //         <BottomTab navigator={ props }>
    //         </BottomTab>
    //         );
    // }
    tabBarComponent: TabBarBottom,
    animationEnabled: true
}
));