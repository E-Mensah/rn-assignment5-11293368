import React, { useState } from 'react';
import { View, Text, ScrollView, Switch  } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const DarkSettingScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <ScrollView style={{paddingLeft: 20, paddingRight: 15, backgroundColor: '#040720', }}>
        <StatusBar 
            backgroundColor="#040720" 
            barStyle="light-content"
            translucent={false}   
            />
        
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

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, marginTop: 45}}>
            <View style={{ width: 100, height: 65, justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{fontWeight: '500', fontSize: 25, color: 'white',}}>
                    Theme
                </Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', width: 65, height: 65,}}>
            <Switch
                trackColor={{ false: '#767577', true: 'lightgreen' }}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            </View>
        </View>

        
      
    </ScrollView>
  )
}

export default DarkSettingScreen
