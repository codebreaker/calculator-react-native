/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
// import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { assertTSCallSignatureDeclaration } from '@babel/types';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      calculationText:""
    }
  }
  
  buttonPressed(text){
    console.log(text)
    this.setState({
      calculationText:this.state.calculationText+text
    })
  }
  render() {

    const numpadArray = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    let numpadViews = []
    for(let i=0;i<4;i++){
      let row = []
      for(let j=0;j<3;j++){
        row.push(
          <TouchableOpacity style={styles.numButton}>
            <Text style={styles.btnText} 
            onPress={()=>{this.buttonPressed(numpadArray[i][j])}}>{numpadArray[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      numpadViews.push(
        <View style={styles.numRow}>{row}</View>
      )
    }

    const operatorsArray = ['D','+','-','*','/']
    let operatorElements = []
    for(let i=0;i<operatorsArray.length;i++){
        operatorElements.push(
          <TouchableOpacity style={styles.numButton}>
            <Text style={styles.btnText}>{operatorsArray[i]}</Text>
          </TouchableOpacity>
        )
    }

    function numbersPressed(text){
      console.log(text)
    }
    return(
      <View style = {styles.container}>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.calculationText}</Text>
          </View>
          <View style={styles.result}>
          <Text style={styles.resultText}>121</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              {numpadViews}
            </View>
            <View style={styles.operators}>
              {operatorElements}
            </View>
          </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  btnText:{
    fontSize:24,
    color: 'white',
  },
  calculationText:{
    fontSize:30,
    color: 'white'
  },
  resultText:{
    fontSize:24,
    color: 'white'
  },
  numButton:{
    flex: 1,
    alignSelf:"stretch",
    justifyContent:"center",
    alignItems:"center"
  },
  numRow:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  calculation:{
    flex:2,
    justifyContent:"center",
    alignItems:"flex-end",
    backgroundColor:'red'
  },
  result:{
    flex:1,
    justifyContent:"center",
    alignItems:"flex-end",
    backgroundColor:"green"
  },
  buttons:{
    flex: 4,
    flexDirection:"row",
    backgroundColor:"blue"
  },
  numbers:{
    flex:3,
    backgroundColor:"blue"
  },
  operators:{
    flex:1,
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:"grey"
  }

});

//export default App;
