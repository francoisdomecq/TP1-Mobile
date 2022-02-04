import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Good job !')}
        >
          <Text style={styles.textFont}>Hit me like you mean it</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  button: {
    padding:20,
    width: 300,
    backgroundColor: 'skyblue',
    alignItems:'center'
  },
  textFont:{
    fontSize:20,
  }
})
