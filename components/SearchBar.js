import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default SearchBar = (props) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput 
        autoCorrect={false}
        autoCapitalize={false}
        value={props.term}
        onChangeText={newTerm => props.onTermChange(newTerm)}
        style={styles.inputStyle} placeholder="Search"/>
    </View>
}
const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})