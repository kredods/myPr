import React from 'react';
import { Container, Content, Spinner, Form, Label, Input, Item, Text, Button } from 'native-base';
import { PageHeader } from '../page.header.component';
import Icon from 'react-native-vector-icons/Entypo';
import { addWorkout } from '../../redux/actions';
import { connect } from 'react-redux';
class AddWorkoutPage extends React.Component {

    render() {
        return (
            <Container>
              <PageHeader title={ 'New Workout' } pageProps={ this.props }>
              </PageHeader>
              <Form>
                <Item inlineLabel>
                  <Label>Workout Name</Label>
                  <Input onChangeText={ (text) => this.workoutName = text } />
                </Item>
                <Item inlineLabel last>
                  <Label>Body Part</Label>
                  <Input onChangeText={ (text) => this.muscle = text } />
                </Item>
                <Button iconLeft full danger onPress={ () => {
                                                           this.add()
                                                       } }>
                  <Icon name="circle-with-plus" size={ 25 } color="white" />
                  <Text>Add</Text>
                </Button>
              </Form>
            </Container>
            );
    }
    add() {
        this.props.addWorkout({
            name: this.workoutName,
            muscle: this.muscle
        });
        this.props.navigation.goBack();
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addWorkout: (workout) => {
            dispatch(addWorkout(workout))
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(AddWorkoutPage);
