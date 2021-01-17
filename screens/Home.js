import React, {useState} from 'react';
import { StyleSheet, Text, View, Button , Modal} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {globalStyles} from '../styles/global';
import Flag from 'react-native-flags';
import { MaterialIcons } from '@expo/vector-icons'; 
//import Modal from 'react-native-modal';
import Main from "./Main";


export default function Home () {
  const [modelOpen, setModalOpen] = useState(false);
        return (
        <View style={globalStyles.container1}>
        <StatusBar style="auto" />
        <Text style={globalStyles.titleText}>LÅN EN</Text>
        <Text style={globalStyles.titleText}> GRATIS</Text>
        <Text style={globalStyles.titleText}>FREETRAILER </Text>
        <Text style={globalStyles.titleText}>NÆR DIG </Text>
        <View style={globalStyles.buttonContainer}>
        <Text style={globalStyles.buttonText1}> Kom god igang</Text>
        <Text style={globalStyles.buttonText2}> Find en freetrailer</Text> 
        
        <Modal visible= {modelOpen} animationType='slide' color="white">
         <View style={StyleSheet.titleText2}>
           <MaterialIcons name="close"
                         size={32}
                         color="black" 
                         style={globalStyles.modalToggle}
                  onPress={() => setModalOpen(false)} />
           
          <Main />
          </View>
          </Modal>
        <View style={{ flexDirection:"row" }}>
        <View style={{ paddingLeft: 110 }} >
         <Button title={'sporg'} 
                 color={"#00316e"}
                  name="add"
                  onPress={() => setModalOpen(true)}  />
        </View>
        <View >
        <Flag 
                  code="DK"
                  size={32} />
        </View>
        </View>     
        </View>
        </View>
        )
    }