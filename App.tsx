import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
interface CLassStateType {
  name: string;
}

export default class App extends Component<{},CLassStateType> {
  constructor(public props = {name:String}) {
    super(props);
    this.state = {
      name:"",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Saisissez votre prénom"
          onSubmitEditing={Event=>this.setState({name:Event.nativeEvent.text})}
        />
        <Text style={styles.nameOutput}>
          {this.state.name ? `Bienvenue ${this.state.name}` : ""}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
  },
  nameOutput:{
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2980b9", 
  }
})
