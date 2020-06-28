import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export default SearchBar = () => {
    return <View style={styles.background}>
        <Text>In Bar</Text>
    </View>
}
const styles = StyleSheet.create({
    background:{
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius: 5,
        marginHorizontal: 15
    }
})