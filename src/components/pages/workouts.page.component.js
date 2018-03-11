import React from 'react';
import { Container, Content, List, ListItem, Left, Right, Body, Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import { PageHeader } from '../page.header.component';
import { MockData } from '../../mock.data';
export class Workouts extends React.Component {
    constructor() {
        super();
        this.workoutClick = this.workoutClick.bind(this)
    }
    static navigationOptions = {
        title: 'Workouts',
        headerStyle: {
            backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        const {goBack} = this.props.navigation;
        return (
            <Container>
              <Content>
                <List>
                  { MockData.Workouts.map(workout => {
                    
                        return <WorkoutCompmponent navigation={ this.props.navigation } press={ this.workoutClick } workout={ workout } key={ workout.name }>
                               </WorkoutCompmponent>
                    }) }
                  <Button iconLeft full danger>
                    <Icon name="circle-with-plus" size={ 25 } color="white" />
                    <Text>Add Workout</Text>
                  </Button>
                </List>
              </Content>
            </Container>
            );
    }

    workoutClick() {
        this.props.navigation.navigate('HighlightsPage');
    }
}

class WorkoutCompmponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ListItem avatar onPress={ () => this.openWorkoutDetail() }>
              <Left>
              </Left>
              <Body>
                <Text>
                  { this.props.workout.name }
                </Text>
                <Text note>
                  { this.props.workout.muscle }
                </Text>
              </Body>
              <Right>
                <Text note>
                  { this.getSetRepRangeForMaxWeight() }
                </Text>
              </Right>
            </ListItem>
            );
    }

    openWorkoutDetail = () => {
        this.props.navigation.navigate('WorkoutDetail', {
            workout: this.props.workout
        });
    }
    getSetRepRangeForMaxWeight = () => {
        let max = 0;
        let setIndex;
        let index = 0;
        this.props.workout.setGroups.forEach(set => {
            if (set.weight > max) {
                max = set.weight;
                setIndex = index;
            }
            index++;
        });
        let maxSet = this.props.workout.setGroups[setIndex];
        return `Max : ${maxSet.sets} X ${maxSet.reps} X ${maxSet.weight}`;
    }
}