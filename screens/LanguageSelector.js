import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectLanguage } from '../actions/index'
import { View, Text, TouchableOpacity , Button} from 'react-native'
import { languages } from "./Languages"
import Flag from 'react-native-flags'


class LanguageSelector extends Component {
  render() {
    const { heading } = this.props.selectedLanguage;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left' }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{ heading }</Text>
        </View>
        <View style={{ padding: 20 }}>

        <TouchableOpacity onPress={()=> this.props.selectLanguage(languages.dansk)}>
        <View style={{ flexDirection:"row" }}>
        <View style={{ marginRight: 110, padding: 20 }} >
            <Text>Dansk</Text>
            </View>
            <View style={{ marginLeft: 30, padding: 20 }}>
            <Flag 
               code="DK"
               size={32} />
               </View>
               </View>
              
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.selectLanguage(languages.svenska)}>
          <View style={{ flexDirection:"row" }}>
        <View style={{ marginRight: 110, padding: 15 }} >
            <Text>Svenska</Text>
            </View>
            <View style={{ marginLeft: 30, padding: 20 }}>
            <Flag 
               code="SE"
               size={32} />
               </View>
               </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.selectLanguage(languages.norsk)}>
          <View style={{ flexDirection:"row" }}>
        <View style={{ marginRight: 110, padding: 20 }} >
            <Text>Norsk</Text>
            </View>
            <View style={{ marginLeft: 30, padding: 20 }}>
            <Flag 
               code="NO"
               size={32} />
               </View>
               </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.selectLanguage(languages.english)}>
          <View style={{ flexDirection:"row" }}>
        <View style={{ marginRight: 110, padding: 15 }} >
            <Text>English</Text>
            </View>
            <View style={{ marginLeft: 30, padding: 20 }}>
            <Flag 
               code="GB"
               size={32} />
               </View>
               </View>
          </TouchableOpacity>
        <Button title={'ok'} 
                color={"#00316e"} />
                 </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return { 
    selectedLanguage: state.language,
  }
}
export default connect(mapStateToProps, { selectLanguage })(LanguageSelector);