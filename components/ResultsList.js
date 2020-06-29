import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default SearchBar = (props) => {
    return <View>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <FlatList
            horizontal={true}
            data={props.restruants}
            keyExtractor={(restruant)=>restruant.id}
            renderItem={({item})=>{
                return <Text>{item.name}</Text>
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})