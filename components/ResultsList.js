import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default SearchBar = (props) => {
    return <View>
        <Text style={styles.titleStyle}>{props.title}</Text>
    </View>
}
const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})