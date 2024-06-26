import React from 'react'
import { View, Text, ScrollView  } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const DarkSettingScreen = () => {
  return (
    <ScrollView style={{paddingLeft: 20, paddingRight: 15, backgroundColor: '#040720', }}>
        
        <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 25, color: 'white', marginBottom: 90, marginTop: 20}}>Settings</Text>

        <View style={{flexDirection: 'row', marginBottom: 20, 
            justifyContent: 'space-between',  
            alignItems: 'center', paddingBottom: 5, 
            width: 350, borderBottomWidth: 1, borderBottomColor: 'rgba(128, 128, 128, 0.2)',}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>Language</Text>
            <FontAwesome name='angle-right' size={22} color='grey' style={{paddingBottom: 13, paddingTop: 13, }}/>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20, 
            justifyContent: 'space-between',  
            alignItems: 'center', paddingBottom: 5, 
            width: 355, borderBottomWidth: 1, borderBottomColor: 'rgba(128, 128, 128, 0.2)',}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>My Profile</Text>
            <FontAwesome name='angle-right' size={22} color='grey' style={{paddingBottom: 13, paddingTop: 13, }}/>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20, 
            justifyContent: 'space-between',  
            alignItems: 'center', paddingBottom: 5, 
            width: 355, borderBottomWidth: 1, borderBottomColor: 'rgba(128, 128, 128, 0.2)',}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>Contact Us</Text>
            <FontAwesome name='angle-right' size={22} color='grey' style={{paddingBottom: 13, paddingTop: 13, }}/>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20, 
            justifyContent: 'space-between', 
            alignItems: 'center', paddingBottom: 5, 
            width: 355, borderBottomWidth: 1, borderBottomColor: 'rgba(128, 128, 128, 0.2)',}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>Change Password</Text>
            <FontAwesome name='angle-right' size={22} color='grey' style={{paddingBottom: 13, paddingTop: 13, }}/>
        </View>

        <View style={{flexDirection: 'row', 
            justifyContent: 'space-between',  
            alignItems: 'center', paddingBottom: 5, 
            width: 355, borderBottomWidth: 1, borderBottomColor: 'rgba(128, 128, 128, 0.2)',}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>Privacy Policy</Text>
            <FontAwesome name='angle-right' size={22} color='grey' style={{paddingBottom: 13, paddingTop: 13, }}/>
        </View>

        <View>
            <Text style={{fontWeight: '500', fontSize: 25, color: 'white', marginBottom: 20, marginTop: 50}}>
                Theme
            </Text>
        </View>

        
      
    </ScrollView>
  )
}

export default DarkSettingScreen
