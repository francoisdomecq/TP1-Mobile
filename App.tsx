import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.textInput}
        placeholder='Saisissez votre prénom'
        onSubmitEditing={Event=>alert(`Bienvenue, ${Event.nativeEvent.text} `)}
        />
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
  textInput:{
    fontSize:18
  }

})
