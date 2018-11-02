import React, { Component } from 'react';
import { Image, Text, Alert} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

const txt = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export default class CardImageExample extends Component {


  handlePressMore = (msg) => {
    Alert.alert(
      'Post',
      msg,
      [
        {text: 'Ok'},
      ],
      { cancelable: true }
    )
  }
  
  render() {
    const { data } = this.props;
    const txt = data && data.description || '';

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: data.thumbnail}} />
            <Body>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.title}</Text>
              <Text note style={{ fontSize: 16}}>{txt.length > 50 ? <React.Fragment>{txt.substring(0, 50)}... <Text style={{ color: 'orange' }} onPress={() => this.handlePressMore(txt)}>view more</Text></React.Fragment> : txt}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: data.imgUri }} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          {/* <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon name="chatbubbles" />
              <Text>40 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right> */}
        </CardItem>
      </Card>
    );
  }
}