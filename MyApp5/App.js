import { StyleSheet, Text, View } from 'react-native';
import LightSettingScreen from './Components/LightSettingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      
      <LightSettingScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
