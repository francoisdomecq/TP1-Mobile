import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:'https://www.bpesquet.fr/images/ENSC.jpg'}}/>
      <Image style={styles.image} source={{uri:'https://www.bpesquet.fr/images/ENSC.jpg'}}/>
      <Image style={styles.image} source={{uri:'https://www.bpesquet.fr/images/ENSC.jpg'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  image:{
    height:75,
    width:108,
  }
})
