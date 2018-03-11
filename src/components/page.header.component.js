import React from 'react';
import { Container, Header, Left, Button, Content, Body, Right, Icon, Title } from 'native-base';
import { StyleSheet, Text } from 'react-native';
export class PageHeader extends React.Component {

  constructor() {
    super();
  }

  getStackPosition() {
    return this.props.pageProps.navigation.state.key.split('-')[2];
  }

  render() {
    const {goBack} = this.props.pageProps.navigation;
    let backButton;
    if (this.getStackPosition() !== '0') {
      backButton = (
        <Button transparent onPress={ () => goBack() }>
          <Text style={ styles.headerFont }>
            Close
          </Text>
        </Button>);
    }
    return (
      <Header style={ { backgroundColor: 'red' } } androidStatusBarColor="red">
        <Left>
          { backButton }
        </Left>
        <Body>
          <Title style={ styles.headerFont }>
            { this.props.title }
          </Title>
        </Body>
        <Right>
        </Right>
      </Header>
      );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'red',
  },
  headerFont: {
    color: 'white'
  }
});