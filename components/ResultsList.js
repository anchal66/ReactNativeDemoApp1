import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetails from './ResultDetails';

export default ResultList = (props) => {
    return <View>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <FlatList
            horizontal={true}
            data={props.restruants}
            keyExtractor={(restruant)=>restruant.id}
            renderItem={({item})=>{
                return <ResultDetails restruant={item}/>
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