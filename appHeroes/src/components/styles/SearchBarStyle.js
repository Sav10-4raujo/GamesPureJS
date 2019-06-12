import { StyleSheet } from 'react-native';

const SearchBarStyle = StyleSheet.create({
  control:{
    backgroundColor:"#0575e6",
    borderTopWidth:3,
    height:85,
    width:415,
    flexDirection: 'row',
  },
  arrow:{
    width:55,
    height:55,
    margin:10
  },
  Controlarrows:{
    flexDirection:'row',
    alignSelf:'flex-start'
  },
  searchInput:{
    width:230,
    height: 45,
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15

  },
  controlInputSearch:{
    justifyContent: 'center',
    marginBottom :10,
    marginLeft: 7
  }
});

export default SearchBarStyle;