import React from 'react';
import { Container, Content, List, ListItem, Left, Right, Body, Text, Button, Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import { PageHeader } from '../page.header.component';
import { MockData } from '../../mock.data';
import {AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import {initAction} from '../../redux/actions';

 class Workouts extends React.Component {
    constructor() {
        super();
        this.workoutClick = this.workoutClick.bind(this);
        this.state = {
            ...this.state,
            loaded: false
        }
        this.fetchWorkouts();
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

     async fetchWorkouts(){
       await AsyncStorage.setItem('test', JSON.stringify( MockData.Workouts))
         AsyncStorage.getItem('test').then( data =>{
            if (data !== null) {
                this.props.initAction(JSON.parse(data));
                setTimeout(()=>{
                    this.setState ({loaded: true});
                },3000);
                
            }
         },()=>{
             console.log("failure");
         });
    }

    render() {

        if(this.state.loaded === false ){
            return (
                <Container>
                    <Spinner color ="red">
                    </Spinner>
                    </Container>
            )
        }
        console.log(this.state.loaded);
        const {goBack} = this.props.navigation;
        return (
            <Container>
              <Content>
                <List>
                  { this.props.workouts.map(workout => {
                    
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

const mapStateToProps = (state) => ({
    workouts: state.workouts,
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      initAction: (workouts) => {
        dispatch(initAction(workouts))
      }
    }
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Workouts);



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
