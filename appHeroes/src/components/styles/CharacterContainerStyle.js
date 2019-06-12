import { StyleSheet } from 'react-native';

const CharacterContainerStyle = StyleSheet.create({
  control:{
    color:"red",
    backgroundColor:"#0062bc",
    height:300,
    width:340,
    marginVertical:10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage:{
    width:290,
    height:200
  },
  name:{
    fontSize:20,
    color: '#fff',
    marginVertical:5,
  },
  nameAndImage:{
    borderWidth:2,
    borderColor:'#fff',
    alignItems:'center',
  },
  blackBorder:{
    borderWidth:2,
    alignItems:'center'
  }
  
});

export default CharacterContainerStyle;