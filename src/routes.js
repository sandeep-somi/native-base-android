import React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { View, Text } from 'react-native';
import { Main, WelcomePage, Login } from './containers';
import { Button } from 'native-base';

const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest}
    render={props => <Component {...props}/>  }
  />
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest}
    render={props => <Component {...props}/>  }
  />
}



const AppRoutes = props => {

  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Main}/>
        <Route component={NotFound}/>
      </Switch>
    </NativeRouter>
  )
}

class NotFound extends React.Component {
  
  render() {

    return (
      <View>
        <Text>Under Construction</Text>
        <Button onPress={() => this.props.history.push('/login')}><Text>Go Back</Text></Button>
      </View>
    )
  }
}

export default AppRoutes