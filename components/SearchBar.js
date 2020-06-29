import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default SearchBar = (props) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={props.term}
            style={styles.inputStyle} placeholder="Search"
            onChangeText={newTerm => props.onTermChange(newTerm)}
            onEndEditing={()=>props.onTermSubmit()}
            />
    </View>
}
const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom:10
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