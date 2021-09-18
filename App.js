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
      calculationText:"",
      resultText:""
    }
    this.operatorsArray = ['DEL','+','-','*','/']

  }

  calculateResult(){
      const text = this.state.calculationText
      console.log(text, eval(text))
      this.setState({
        resultText:eval(text)
      })
  }
  
  buttonPressed(text){
    console.log(text)
    if(text =='='){
        return this.calculateResult()
    }

    this.setState({
      calculationText:this.state.calculationText+text
    })
  }

  operatorsPressed(operatorText){
    if(operatorText == 'DEL'){
      //if text length>1
      if(this.state.calculationText.length>0){
        const edited = this.state.calculationText.slice(0,this.state.calculationText.length-1)
        console.log("edited text-"+edited)
        this.setState({
          calculationText : edited
        })
      }
    }else{ //case of +,-,*,/
      let lastchar = this.state.calculationText.split('').pop()
      // to check unable to get the operators array here
      console.log('is last char a symbol ?',lastchar, (this.operatorsArray.indexOf(lastchar)>0))
      if(this.operatorsArray.indexOf(lastchar)>0) return
      if(this.state.calculationText=='') return
      this.setState({
        calculationText:this.state.calculationText+operatorText
      })
    }
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

    let operatorElements = []
    for(let i=0;i<this.operatorsArray.length;i++){
        operatorElements.push(
          <TouchableOpacity style={styles.numButton}>
            <Text style={styles.btnText}
              onPress={()=>{this.operatorsPressed(this.operatorsArray[i])}}
              >{this.operatorsArray[i]}</Text>
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
          <Text style={styles.resultText}>{this.state.resultText}</Text>
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
    color: 'black'
  },
  resultText:{
    fontSize:24,
    color: 'black'
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
    backgroundColor:'white'
  },
  result:{
    flex:1,
    justifyContent:"center",
    alignItems:"flex-end",
    backgroundColor:"white"
  },
  buttons:{
    flex: 4,
    flexDirection:"row",
    backgroundColor:"blue"
  },
  numbers:{
    flex:3,
    backgroundColor:"#434343"
  },
  operators:{
    flex:1,
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:"#636363"
  }

});

//export default App;
