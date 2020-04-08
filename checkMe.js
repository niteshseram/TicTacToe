import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import Expo from 'expo';
import {AppLoading} from 'expo';

export default class App extends React.Component {

  /*constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount(){
    await Expo.Font.loadAsync({
      Roboto : require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium : require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isLoading : false });
  }*/

  render(){
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                <Body>
                  <Text>Nitesh Seram</Text>
                  <Text note>Coder</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  } 
}


