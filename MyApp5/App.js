import LightHomeScreen from './Components/LightHomeScreen';
import LightSettingScreen from './Components/LightSettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import DarkSettingScreen from './Components/DarkSettingScreen';
import DarkHomeScreen from './Components/DarkHomeScreen';




const Tab = createBottomTabNavigator ();
const getTabBarIcon = (iconSource) => (
  <Image
    source={iconSource}
    style={{
      width: 30, 
      height: 25,
      objectFit: 'contain',
    }}
  />
);

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingTop: 5,
          paddingBottom: 12,
          borderColor:  'white',
          backgroundColor: 'white'  //#2f2b45
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
    }}
    >
      
      <Tab.Screen name='Home' 
      component={LightHomeScreen}
      options={{ headerShown: false,
        title: 'Home',
        tabBarIcon: () => getTabBarIcon(require('./Components/Images/home.png')),
       }}
      />
      <Tab.Screen name='My Cards' 
      component={DarkSettingScreen}
      options={{ title: 'My Cards',
        headerShown: false,
        tabBarIcon: () => getTabBarIcon(require('./Components/Images/myCards.png')),
      }}
      />
      <Tab.Screen name='Statistics' 
      component={DarkHomeScreen}
      options={{ title: 'Statistics',
        headerShown: false,
        tabBarIcon: () => getTabBarIcon(require('./Components/Images/statictics.png')),
      }}
      />
      <Tab.Screen name='Settings' 
      component={LightSettingScreen}
      options={{ headerShown: false,
        title: 'Settings',
        tabBarIcon: () => getTabBarIcon(require('./Components/Images/settings.png')),
       }}
      />
      
    </Tab.Navigator>
    </NavigationContainer>
    //<LightHomeScreen />
    //<LightSettingScreen />
    /*

    first:
    

    icon names: - chart-pie-simple
    - gear-complex
    - credit-card-front
    - house-window
    - angle-right   

  
    */
  );
}



