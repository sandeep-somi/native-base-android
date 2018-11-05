import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { Container, Content, Button, Card, CardItem, Body, Header, Footer, Left, Right, Icon } from 'native-base';
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
      <Content>
        <Header>
          <Left>
            <Text>Native Base Practice</Text>
          </Left>
          <Right>
            <Text onPress={() => this.props.history.push('/')}><Icon type="FontAwesome" name="power-off" style={{ color: '#fff'}}/></Text>
          </Right>
        </Header>
        {homeData && homeData.map(item => <CustomCard key={item.id} data={item}/>)}
      </Content>
      )
  }
}





const styles = StyleSheet.create({
  main: {
    
  }
});