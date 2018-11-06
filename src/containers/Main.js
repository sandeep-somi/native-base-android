import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler, StatusBar } from 'react-native';
import { Container, Content, Button, Card, CardItem, Body, Header, Footer, Left, Right, Icon, Title } from 'native-base';
import { CustomCard } from '../components';
import { homeData } from '../constants';

export default class Main extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.
    
      if (true) {
        this.props.history.goBack();
        return true;
      }
      return false;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  render() {

    return (
      <React.Fragment>
        <Header style={styles.header} androidStatusBarColor="red">
          <Left>
            <Text>Native Base Practice</Text>
          </Left>
          <Right>
            <Text onPress={() => this.props.history.push('/')}><Icon type="FontAwesome" name="power-off" style={{ color: 'grey', fontWeight: '100' }}/></Text>
          </Right>
        </Header>
        <Content>
          {homeData && homeData.map(item => <CustomCard key={item.id} data={item}/>)}
        </Content>
      </React.Fragment>
    )
  }
}





const styles = StyleSheet.create({
  main: {
    
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    borderBottomWidth: 1
  }
});