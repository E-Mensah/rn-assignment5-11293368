import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, StyleSheet, ScrollView,} from 'react-native'
import LightIcons from './LightIcons'
import LightHomeIntro from './LightHomeIntro'
import LightTransactionSec from './LightTransactionSec'

const LightHomeScreen = () => {
  return (
    <ScrollView>
        <StatusBar 
            backgroundColor="#fafafd" 
            barStyle='light-content'   
            translucent={false}   
            />
        <View style={styles.container}>
            
            <LightHomeIntro />
            <LightIcons />
            <LightTransactionSec />
            
        
        </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 35,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      //width: 370,
      backgroundColor: 'white'
    },
    });

export default LightHomeScreen
