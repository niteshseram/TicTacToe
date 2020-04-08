import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import {Button} from 'native-base';
var itemArray = new Array(9).fill('empty')
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isCross : false,
      winMessage : "",
      isDisable: false
    };
  }
  buttonDisable =() => {
    this.setState({isDisable: true})
  }
  winAlert = () =>
  Alert.alert(
    "Who is the winner ?",
    this.state.winMessage,
    [
      { text: "Reset", onPress: () => this.resetGame() },
      {
        text: "Cancel",
        onPress: () => this.buttonDisable(),
        style: "cancel",
        fontSize: 50
      }
      
    ],
    { cancelable: false }
  );

  drawItem = itemNumber => {
    if(itemArray[itemNumber] === 'empty'){
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross : !itemArray[itemNumber] }, () => {});
    }
    this.winGame();
  }

  chooseItemIcon = itemNumber =>{
    if (itemArray[itemNumber] !== "empty"){
      return itemArray[itemNumber] ? "cross" : "circle"
    }
    return "pencil";
  };

  chooseItemColor = itemNumber => {
    if (itemArray[itemNumber] !== "empty"){
      return itemArray[itemNumber] ? "red" : "green"
    }
    return "black";
  }

  resetGame = () => {
    itemArray.fill("empty");
    this.setState({ winMessage: ''})
    this.setState({isDisable: false})
    //force update to the component
    this.forceUpdate();
  }

  winGame = () =>{
    if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[1]) && (itemArray[1] == itemArray[2])) {
      this.setState({ winMessage: (itemArray[0]? 'Cross':'Circle').concat(' win')}, () => {this.winAlert()})
    } else if ((itemArray[3] !== "empty") && (itemArray[3] == itemArray[4]) && (itemArray[4] == itemArray[5])) {
      this.setState({ winMessage: (itemArray[3]? 'Cross':'Circle').concat(' win')}, () => {this.winAlert()})
    } else if ((itemArray[6] !== "empty") && (itemArray[6] == itemArray[7]) && (itemArray[7] == itemArray[8])) {
      this.setState({ winMessage: (itemArray[6]? 'Cross':'Circle').concat(' win')},() => {this.winAlert()})
    } else if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[3]) && (itemArray[3] == itemArray[6])) {
      this.setState({ winMessage: (itemArray[0]? 'Cross':'Circle').concat(' win')},() => {this.winAlert()})
    } else if ((itemArray[1] !== "empty") && (itemArray[1] == itemArray[4]) && (itemArray[4] == itemArray[7])) {
      this.setState({ winMessage: (itemArray[1]? 'Cross':'Circle').concat(' win')},() => {this.winAlert()})
    } else if ((itemArray[2] !== "empty") && (itemArray[2] == itemArray[5]) && (itemArray[5] == itemArray[8])) {
      this.setState({ winMessage: (itemArray[2]? 'Cross':'Circle').concat(' win')},() => {this.winAlert()})
    } else if ((itemArray[0] !== "empty") && (itemArray[0] == itemArray[4]) && (itemArray[4] == itemArray[8])) {
      this.setState({ winMessage: (itemArray[0]? 'Cross':'Circle').concat(' win')},() => {this.winAlert()})
    } else if ((itemArray[2] !== "empty") && (itemArray[2] == itemArray[4]) && (itemArray[4] == itemArray[6])) {
      this.setState({ winMessage: (itemArray[2]? 'Cross':'Circle').concat(' win')},() => {this.winAlert()})
    }else if ((itemArray[0]!=="empty") && (itemArray[1]!=="empty") && (itemArray[2]!=="empty") && (itemArray[3]!=="empty") && (itemArray[4]!=="empty") && (itemArray[5]!=="empty") && (itemArray[6]!=="empty") && (itemArray[7]!=="empty") && (itemArray[8]!=="empty")){
      this.setState({ winMessage: "Game Draw"},() => {this.winAlert()})
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Tic Tac Toe</Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress ={() => this.drawItem(0)}
              disabled = {this.state.isDisable}
              >
                <Entypo 
                name={this.chooseItemIcon(0)}
                size={50}
                color={this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress ={() => this.drawItem(1)}
              disabled = {this.state.isDisable}
              >
                <Entypo 
                name={this.chooseItemIcon(1)}
                size={50}
                color={this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress ={() => this.drawItem(2)}
              disabled = {this.state.isDisable}
              >
                <Entypo 
                name={this.chooseItemIcon(2)}
                size={50}
                color={this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>  
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress ={() => this.drawItem(3)}
              disabled ={this.state.isDisable}
              >
                <Entypo 
                name={this.chooseItemIcon(3)}
                size={50}
                color={this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress ={() => this.drawItem(4)}
              disabled ={this.state.isDisable}
              >
                <Entypo 
                name={this.chooseItemIcon(4)}
                size={50}
                color={this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress ={() => this.drawItem(5)}
              disabled ={this.state.isDisable}
              >
                <Entypo 
                name={this.chooseItemIcon(5)}
                size={50}
                color={this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress ={() => this.drawItem(6)}
              disabled= {this.state.isDisable}
              >
                <Entypo 
                name={this.chooseItemIcon(6)}
                size={50}
                color={this.chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress ={() => this.drawItem(7)}
              disabled= {this.state.isDisable}
              >
                <Entypo 
                name={this.chooseItemIcon(7)}
                size={50}
                color={this.chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress ={() => this.drawItem(8)}
              disabled= {this.state.isDisable}
              >
                <Entypo 
                name={this.chooseItemIcon(8)}
                size={50}
                color={this.chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View> 
          </View>
        </View>
        <Text style={styles.winMessage}>{this.state.winMessage}</Text>
        <Button full rounded  style={styles.button} onPress= {() => {this.resetGame()}}>
          <Text style={styles.btnText}>Reset Game</Text>
        </Button>
      </View>
    );
  } 
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#2B2B52",
    alignItems : "center",
    justifyContent : "center",
  },
  grid:{

  },
  heading:{
    alignContent:"center",
    alignItems: "center",
    fontSize: 40,
    marginBottom: 80,
    fontWeight: "bold",
    color: "#00CCCD"

  },
  row: {
    flexDirection: 'row',
  },
  item: {
    borderWidth: 2,
    borderColor: "#AE1438",
    padding: 30,
    backgroundColor: "#00CCCD"
  },
  winMessage: {
    padding: 20,
    fontSize: 35,
    fontWeight: "bold",
    color: "#00CCCD"
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: "#00CCCD"
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold"
  },
  cancel:{
    fontSize: 95
  }
})

