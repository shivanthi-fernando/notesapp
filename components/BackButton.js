import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenType } from '../constants/constants';

const BackButton = ({onButtonClick})=>  {
  return (
    <View style={styles.container} >
        <View style={styles.button}>
            <Button onPress={()=> onButtonClick(ScreenType.home)} color={"gray"} title="< Back"/>
        </View>
    </View>
  )
}

export default BackButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    button: {
        margin: 10
    }
})