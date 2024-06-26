import React from 'react'
import { View, Text, Image } from 'react-native'

const LightTransactionSec = () => {
  return (
    <View style={{width: 320}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25}}>
            <Text style={{color: "black", fontSize: 23, fontWeight: '500'}}>Transaction</Text>
            <Text style={{color: "blue", fontSize: 17, fontWeight: '500'}}>Sell All</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
            <View style={{flexDirection: 'row', gap: 15}}>
                <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('./Images/apple.png')} style={{height: 23, width: 18, objectFit: 'contain'}}/>
                </View>
                <View style={{flexDirection: 'column', gap: 2}}>
                    <Text style={{color: "black", fontSize: 20, fontWeight: '500'}}>Apple Store</Text>
                    <Text style={{color: "grey", fontSize: 14, fontWeight: '400'}}>Entertainment</Text>
                </View>
            </View>
            <Text style={{color: "black", fontSize: 20, fontWeight: '500'}}>- $5,99</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
            <View style={{flexDirection: 'row', gap: 15}}>
                <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('./Images/spotify.png')} style={{height: 20, width: 20, objectFit: 'contain'}}/>
                </View>
                <View style={{flexDirection: 'column', gap: 2}}>
                    <Text style={{color: "black", fontSize: 20, fontWeight: '500'}}>Spotify</Text>
                    <Text style={{color: "grey", fontSize: 14, fontWeight: '400'}}>Music</Text>
                </View>
            </View>
            <Text style={{color: "black", fontSize: 20, fontWeight: '500'}}>- $13,99</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
            <View style={{flexDirection: 'row', gap: 15}}>
                <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('./Images/moneyTransfer.png')} style={{height: 20, width: 20, objectFit: 'contain'}}/>
                </View>
                <View style={{flexDirection: 'column', gap: 2}}>
                    <Text style={{color: "black", fontSize: 20, fontWeight: '500'}}>Money Transfer</Text>
                    <Text style={{color: "grey", fontSize: 14, fontWeight: '400'}}>Transaction</Text>
                </View>
            </View>
            <Text style={{color: "blue", fontSize: 20, fontWeight: '500'}}> $300</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', gap: 15}}>
                <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('./Images/grocery.png')} style={{height: 20, width: 20, objectFit: 'contain'}}/>
                </View>
                <View style={{flexDirection: 'column', gap: 2}}>
                    <Text style={{color: "black", fontSize: 20, fontWeight: '500'}}>Grocery</Text>
                    <Text style={{color: "grey", fontSize: 14, fontWeight: '400'}}>Shopping</Text>
                </View>
            </View>
            <Text style={{color: "black", fontSize: 20, fontWeight: '500'}}>- $88</Text>
        </View>
      
    </View>
  )
}

export default LightTransactionSec
