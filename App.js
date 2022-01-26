import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Camera from 'expo-camera';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Camera</Text>
      <Text>"Whoa Camera in not working"</Text>
      <Text>Directed by...</Text>
      <StatusBar style="auto" />
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
