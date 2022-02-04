import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.box, styles.boxLarge]} />
        <ScrollView horizontal>
          <View style={[styles.box, styles.boxSmall]} />
          <View style={[styles.box, styles.boxSmall]} />
          <View style={[styles.box, styles.boxSmall]} />
        </ScrollView>
        <View style={[styles.box, styles.boxLarge]} />
        <View style={[styles.box, styles.boxSmall]} />
        <View style={[styles.box, styles.boxLarge]} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    marginBottom: 10,
    marginRight: 10,
  },
  boxSmall: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: '100%',
    height: 300,
    backgroundColor: 'steelblue',
  },
})
