import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Container, Content } from 'native-base';
import { LoginForm } from '../components';

const remote = 'https://i.pinimg.com/originals/ae/e2/c7/aee2c787f9f57fc243d8890dfc54b9b0.jpg';


export default class Login extends React.Component {


  render() {

    return (
      <Container style={{backgroundColor: '#fff', flex: 1 }}>
      <ImageBackground style={{ backgroundColor: 'orange', width: '100%', height: '100%' }} source={{ uri: remote }}>
        <Content>
          <View style={{paddingTop: 80, padding: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <Image style={{width: 100, height: 100}} source={{uri: 'http://simpleicon.com/wp-content/uploads/rocket.png'}}/>
          </View>
          <Text>

          </Text>
            <LoginForm />
            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
              <Button block bordered style={{ borderColor: '#fff' }}  onPress={() => this.props.history.push('/home')}><Text style={{ color: '#fff' }}>Login</Text></Button>
            </View>
            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
              <Button block bordered style={{ borderColor: '#fff' }} onPress={() => this.props.history.push('/signup')}><Text style={{ color: '#fff' }}>SignUp</Text></Button>
            </View>
          </View>
          <Text style={{ textAlign: 'center' }} onPress={() => this.props.history.push('/')}>Go Back</Text>
        </Content>
        </ImageBackground>
      </Container>
    )
  }
}