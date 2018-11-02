import React from 'react';
import { Main } from './src/containers';
import { Container } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {

    return (
      <Container style={styles.container}>
        <Main />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    // backgroundColor: 'orange'
  }
});


