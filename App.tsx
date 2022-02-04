import React, { Component } from 'react'
import { FlatList, View, StyleSheet, Text } from 'react-native'

const DATA = [
  {
    id: 0,
    firstName: 'Benoit',
  },
  {
    id: 1,
    firstName: 'Bernard',
  },
  {
    id: 2,
    firstName: 'Jean-Marc A',
  },
  {
    id: 3,
    firstName: 'Jérôme',
  },
  {
    id: 4,
    firstName: 'Hervé',
  },
  {
    id: 5,
    firstName: 'Jean-Marc S',
  },
  {
    id: 6,
    firstName: 'Pierre Alexandre',
  },
  {
    id: 7,
    firstName: 'Edwige',
  },
  {
    id: 8,
    firstName: 'Baptiste',
  },
  {
    id: 9,
    firstName: 'Coralie',
  },
  {
    id: 10,
    firstName: 'Jauze',
  },
  {
    id: 11,
    firstName: 'Véronique',
  },
  {
    id: 12,
    firstName: 'Elisabeth',
  },
  {
    id: 13,
    firstName: 'Liliana',
  },
]
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.textFont}>{item.firstName}</Text>
            </View>
          )}
          keyExtractor={(item)=>item.id.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20,

  },
  item: {
    backgroundColor: 'skyblue',
    width: '100%',
    marginTop:5,
    height:30,
    justifyContent:'center'
  },
  textFont:{
    fontSize:18,
  }
})
