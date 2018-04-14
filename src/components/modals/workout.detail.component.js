import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, List, ListItem, Container, Button, Content, Header, Tab, Tabs, TabHeading, Icon, StyleProvider } from 'native-base';
import { PageHeader } from '../page.header.component';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

export class WorkoutDetail extends React.Component {

    constructor(props) {
        super(props);
        this.workout = this.props.navigation.state.params.workout;
    }
    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
        return {
            title: state.params.workout.name,
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    };

    formatTextforSet = (item) => {
        return `${item.weight}lbs for ${item.sets} sets of ${item.reps} reps `
    }

    render() {
        const items = this.workout.setGroups;
        return (
            <StyleProvider style={getTheme(commonColor)}>
            <Container>
              <PageHeader title={ this.props.navigation.state.params.workout.name } pageProps={ this.props }>
              </PageHeader>
              <Content>
                <Tabs tabBarUnderlineStyle={ styles.underlineStyle }>
                  <Tab 
                  heading={ <TabHeading activeTextStyle={ styles.activeTabStyle }>
                                   <Icon name="camera" />
                                   <Text>View</Text>
                                 </TabHeading> }>
                    <List dataArray={ items } renderRow={ (item) => <ListItem>
                                                                      <Text>
                                                                        { this.formatTextforSet(item) }
                                                                      </Text>
                                                                    </ListItem> }>
                    </List>
                  </Tab>
                  <Tab activeTextStyle={ styles.activeTabStyle } heading={ <TabHeading>
                                                                             <Icon name="hammer" />
                                                                             <Text>Edit</Text>
                                                                           </TabHeading> }>
                    <Button iconLeft full danger>
                      <MaterialIcon name="dumbbell" size={ 25 } color="white" />
                      <Text>Add Set</Text>
                    </Button>
                  </Tab>
                </Tabs>
              </Content>
            </Container>
            </StyleProvider>
            );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    underlineStyle: {
        backgroundColor: 'red'
    },
    activeTabStyle: {
        color: 'red'
    }
});