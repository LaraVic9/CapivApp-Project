import { Platform, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { MaterialIcons } from '@expo/vector-icons';


const OsItem = (props) => {
    return (
        <View style={styles.container}>
          {/* checkbox component */}
           
            {/* title */}
            <Text style={[styles.title]}>
              {props.title}
            </Text>
            {/* delete button */}
            <Pressable style={styles.delete} >
              <MaterialIcons name="delete" size={24} color="#FF6768" />
            </Pressable>
        </View>
      )
    
}

export default OsItem

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "#10456e",
        width: "90%",
        borderRadius: 10,
        padding: 13,
        alignItems: "center",
        marginTop: 15,
        height: 80,
        borderWidth: 1,
        borderColor: 'gray',
    },
    title:{
        color: "#fff",
        fontSize: 20,
        flex: 1,
        fontWeight: "500"
    },
    delete:{
      alignItems: "center",
      justifyContent: "center",
      padding: 2,
      
    }
})