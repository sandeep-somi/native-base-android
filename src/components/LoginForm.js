import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { View } from 'react-native';

export default class FloatingLabelExample extends Component {
  render() {
    return (
      <View style={{ paddingRight: 20 }}>
        <Form>
          <Item floatingLabel>
            <Label style={{ color: '#fff', fontSize: 14 }}>Username</Label>
            <Input style={{ fontSize: 16, color: '#fff' }}/>
          </Item>
          <Item floatingLabel>
            <Label style={{ color: '#fff', fontSize: 14 }}>Password</Label>
            <Input style={{ fontSize: 16, color: '#fff' }}/>
          </Item>
        </Form>
      </View>
    );
  }
}