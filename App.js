import React from 'react';
import { Main } from './src/containers';
import { Container } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import AppRoutes from './src/routes';

export default class App extends React.Component {
  render() {

    return (
      <Container style={styles.container}>
        <AppRoutes />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  }
});