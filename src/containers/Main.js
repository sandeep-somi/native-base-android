import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Button, Card, CardItem, Body, Header, Footer, Left, Right } from 'native-base';
import { CustomCard } from '../components';
import { homeData } from '../constants';

export default class Main extends Component {

  render() {

    return (
      <Content>
        <Header>
          <Left>
            <Text>Native Base Practice</Text>
          </Left>
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