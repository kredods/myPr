import React from 'react';
import { Container, Content } from 'native-base';
import { PageHeader } from '../page.header.component';
export class Highlights extends React.Component {
  static navigationOptions = {
    title: 'Highlights',
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
        <Content/>
      </Container>
      );
  }
}