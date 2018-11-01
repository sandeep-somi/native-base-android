import React from 'react';
import { Main } from './src/containers';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Main style={{ flex: 1, backgroundColor: 'black'}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: 'orange'
  }
});


