import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetails from './ResultDetails';

export default ResultList = (props) => {
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
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
    container:{
        marginBottom: 10
    },
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})