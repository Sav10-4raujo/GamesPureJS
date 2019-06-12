import React, {Component} from 'react';
import { FlatList, View } from 'react-native';
import ListStyle from './styles/ListStyle'
import api from '../services/api';
import SupBar from '../components/SupBar';
import SearchBar from '../components/SearchBar'
import CharacterContainer from '../components/CharacterContainer'
import md5 from 'md5'
import { Actions } from 'react-native-router-flux';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {data:[], page:this.props.page||0}
  }
  async componentWillMount(){
    //http request based on the requirements of Marvel's api
    this.setState({...this,page:this.state.page})
    const date = new Date(),
    timestamp = date.getTime(),
    publicKey = '88471e1e565719d8b1984f3035ead5cb',
    privateKey = '94fc2fd403674c8b6b45a2f5dec759dca92e5efa',
    hash = md5(timestamp+privateKey+publicKey),
    keyApi = `?ts=${timestamp}&limit=20&offset=${this.state.page*20}&apikey=${publicKey}&hash=${hash}`
    result = await api.get(`/characters`+keyApi),
    apiData = result.data.data.results;
    this.setState({...this,data:apiData});
    //errors prevention at end of the list
    if(!this.state.data[0]){
      Actions.list({page:0})      
    };
  }

  render() {
    const {background, flat} = ListStyle;

    return (
      <View style={background}>

          <View >
          <SupBar/>
          </View>

          <View style={flat} >

          <FlatList 
          data={this.state.data}
          listKey={({item})=>item.id}
          keyExtractor={(item,index)=>{
            item.name
          }} 
          renderItem={({item}) => <CharacterContainer character={item}/>}/>

          </View>
          <SearchBar page={this.props.page} />
      </View>
    );
  }
}