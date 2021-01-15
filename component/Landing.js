import React, { Component } from 'react';
import { Text, View , Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {globalStyles} from '../styles/global';
//import LinearGradient from 'react-native-linear-gradient';

export default class Landing extends Component {
    render() {
        return (
    <View style={globalStyles.container}>
      {/* <LinearGradient
        colors={['red', 'yellow', 'green' ]}
        style={globalStyles.linearGradient}
      
      > */}
      <Image
        style={globalStyles.logo}
        source={require('../assets/logo.png')}
      />
      <Text style={globalStyles.titleText}>freetrailer</Text>
      <StatusBar style="auto" />
      {/* </LinearGradient> */}
    </View>

        )
    }
}
