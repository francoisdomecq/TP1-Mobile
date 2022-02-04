import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerBlue}></View>
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
  containerBlue:{
    width:200,
    height:200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'skyblue',
    borderColor:'steelblue',
    borderRadius:20,
    borderWidth:3,
  }
});
