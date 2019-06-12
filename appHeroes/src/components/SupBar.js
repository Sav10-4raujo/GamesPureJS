import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import SupBarStyle from './styles/SupBarStyle'

export default class SupBar extends Component {

  render() {
    const marvel= require('../imgs/logoMarvel.png')

    const {controlImageMarvel, control, imageMarvel } = SupBarStyle
    return (
      <View style={control}>
          <View style={controlImageMarvel}><Image source={marvel} style={imageMarvel}/></View>
      </View>
    );
  }
}