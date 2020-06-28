import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default SearchBar = () => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" size={30} color="black" />
        <TextInput style={styles.inputStyle} placeholder="Search"/>
    </View>
}
const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle:{
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    }
})