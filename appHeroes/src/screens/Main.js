import React, {Component} from 'react';
import {Text} from 'react-native';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MainStyle from './styles/MainStyle';


export default class Main extends Component {
  teste(){
    alert('funfou')
  }
  render() {
    const imageMain = require('../imgs/main.jpg'); 
    const imageButton = require('../imgs/button.png');
    const imageLogo = require('../imgs/Logo.png');
    const { mainView, imageBackground, shield, text, logo, button } = MainStyle;
    return (
      <View style={mainView}>

        <ImageBackground style={imageBackground} source={imageMain}>

          <Image source={imageLogo} style={logo} />

            <TouchableOpacity style={button} onPress={()=>{
              Actions.list()
            }}>
            
              <Image source={imageButton} style={shield}/>

            </TouchableOpacity>

            <Text style={text}> Press the shield to start</Text>

          </ImageBackground>
      </View>

    );
  }
}

