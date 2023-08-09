import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

const AllNotes = ({notes}) => {

    const renderItem = (itemData) => {
        return <ListItem note={itemData.item.note}/>
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALL Notes</Text>
      <FlatList data={notes} renderItem={renderItem} />
    </View>
  )
}

export default AllNotes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
        borderWidth: 4,
        borderRadius: 10,
        borderColor: "#f5f5f5",
        padding: 10
    }
})