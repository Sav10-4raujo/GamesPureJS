import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import CharacterContainerStyle from './styles/CharacterContainerStyle'

export default class CharacterContainer extends Component {

  render() {
    const {control, profileImage, nameAndImage, name,blackBorder} = CharacterContainerStyle,
    character = this.props.character;
    return (
      <View  style={control}>
        <View style={nameAndImage}>
          <View style={blackBorder}>
            <Image source={{uri:`${character.thumbnail.path}.${character.thumbnail.extension}`}} style={profileImage}/>
          <Text style={name}>{character.name}</Text>
          </View>
      </View>
      </View>
    );
  }
}