import React from 'react'
import { Image, Text, View } from 'react-native'

const LightIcons = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 25, width: 370}}>

       <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <View style={{width: 58, height: 58, backgroundColor: '#f5f5f5', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./Images/send.png')} style={{width: 18, height: 20, objectFit: 'contain'}} />
            </View>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Sent</Text>
       </View>

       <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <View style={{width: 58, height: 58, backgroundColor: '#f5f5f5', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./Images/recieve.png')} style={{width: 18, height: 20, objectFit: 'contain'}} />
            </View>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Recieve</Text>
       </View>

       <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <View style={{width: 58, height: 58, backgroundColor: '#f5f5f5', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./Images/loan.png')} style={{width: 20, height: 20, objectFit: 'contain'}} />
            </View>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Loan</Text>
       </View>

       <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4}}>
            <View style={{width: 58, height: 58, backgroundColor: '#f5f5f5', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./Images/topUp.png')} style={{width: 20, height: 20, objectFit: 'contain'}} />
            </View>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Topup</Text>
       </View>
             
    </View>
  )
}

export default LightIcons
