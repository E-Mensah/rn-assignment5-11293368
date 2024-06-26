import React from 'react'
import { Image, Text, View } from 'react-native'

const LightHomeIntro = () => {
  return (
  <View style={{flexDirection: 'column', gap: 35, marginBottom: 35 }}>  

    <View style={{flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between' }}>

      <View style={{flexDirection: 'row', gap: 20}}>  

        <Image source={require('./Images/profile.png')} />
        <View>
          <Text style={{color: 'grey', fontSize: 16, }}>
            Welcome back,
          </Text>
          <Text style={{color: 'black', fontSize: 23, fontWeight: '600'}}>
            Eric Atsu 
          </Text>
        </View>

      </View>

      <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./Images/search.png')} style={{height: 25, width: 25, objectFit: 'contain'}}></Image>
      </View>

    </View>

    <View>
      <Image source={require('./Images/Card.png')}/>
    </View>
  </View>  
  )
}

export default LightHomeIntro
