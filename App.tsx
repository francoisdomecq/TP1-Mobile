import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerRed}></View>
      <View style={styles.containerYellow}></View>
      <View style={styles.containerGreen}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerRed: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  containerYellow: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
  containerGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
})
