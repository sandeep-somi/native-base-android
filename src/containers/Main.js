import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Button, Card, CardItem, Body } from 'native-base';
import { CustomCard } from '../components';

export default class Main extends Component {

  render() {

    return (
      <CustomCard key={1}/>
      )
  }
}



const styles = StyleSheet.create({
  main: {
    
  }
});