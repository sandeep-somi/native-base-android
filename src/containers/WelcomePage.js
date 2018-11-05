import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Form, Item, Input, Label, Button } from 'native-base';
import { LoginForm } from '../components';

const remote = 'https://i.pinimg.com/originals/ae/e2/c7/aee2c787f9f57fc243d8890dfc54b9b0.jpg';

export default class WelcomePage extends React.Component {

  render() {
    console.log(this.props, 'this.props')

    return (
      <ImageBackground style={styles.bgImg} source={{ uri: remote }}>
        <TouchableOpacity style={styles.container} onPress={() => this.props.history.push('/login')}>
          {/* <Image style={{width: 50, height: 50}} source={{uri: 'http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/unlock-icon.png'}}/> */}
          <Text style={styles.wcText}>Welcome!</Text>
          <Text style={styles.wcDesc}>This app is under construction, but beta version will be always available.</Text>
          <Text style={styles.title}>-R-N-B-P-</Text>
          <Text style={styles.subtitle}> - React - Native - Base - Practice - </Text>
          <Text style={{ color: '#fff', paddingTop: 150, fontSize: 10, textAlign: 'center' }}>Tap to continue...</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 160,
    padding: 20,
    flex: 1
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: '#fff',
    paddingTop: 30,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'center',
    color: '#fff',
  },
  bgImg: {
    backgroundColor: 'orange',
    width: '100%',
    height: '100%'
  },
  wcText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  wcDesc: {
    color: '#fff',
    textAlign: 'center'
  }
})
