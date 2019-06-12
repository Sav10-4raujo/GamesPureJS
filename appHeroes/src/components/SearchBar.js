import React, {Component} from 'react';
import {TextInput, View, TouchableOpacity, Image} from 'react-native';
import SearchBarStyle from './styles/SearchBarStyle';
import { Actions } from 'react-native-router-flux';

export default class SupBar extends Component {
  constructor(props){
    super(props);
    this.state = {page:this.props.page || 0}
  }
  passFront(){
    const sum = this.state.page + 1
    this.state.page = sum
    Actions.list({page:this.state.page})
  }
  passBack(){
    if(this.state.page>0){
      const sum = this.state.page - 1
      this.state.page = sum
      console.log(this.state.page)
      Actions.list({page:this.state.page})
    }

  }
  render() {
    const {control, arrow, Controlarrows, searchInput, controlInputSearch} = SearchBarStyle,
    rightArrow = require('../imgs/arrowRight.png');
    leftArrow = require('../imgs/arrowLeft.png');
    return (
      <View style={control}>
        <View style={Controlarrows}>
        <TouchableOpacity onPress={()=>{
          this.passBack()
          }}>
          <Image source={leftArrow} style={arrow}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          this.passFront()
          }}>
          <Image source={rightArrow} style={arrow}/>
        </TouchableOpacity>
        </View>
        <View style={controlInputSearch}>
          <TextInput 
          style={searchInput}
          placeholder="Search for characters"
          onKeyPress ={()=>{
            Actions.list({})
          }}/>
        </View>
      </View>
    );
  }
}