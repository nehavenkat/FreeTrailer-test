import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Modal , TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {globalStyles} from '../styles/global';
import Flag from 'react-native-flags';
import { MaterialIcons } from '@expo/vector-icons'; 

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
       
        <Modal visible= {modelOpen} animationType='slide'>
          <View style={StyleSheet.titleText2}>
          <MaterialIcons name="close"
                         size={24}
                         color="black" 
                         style={globalStyles.modalToggle}
                  onPress={() => setModalOpen(false)} />
          <Text>Danish</Text>
           <Flag 
                  code="DK"
                  size={24} />
          <Text>Hello from Modal</Text>
          </View>
          </Modal>
        <View style={{ flexDirection:"row" }}>
        <View style={{ paddingLeft: 110 }} >
         <Button title={'sporg'} 
                 color={"#00316e"}
                  name="add"
                  onPress={() => setModalOpen(true)} />
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