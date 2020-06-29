import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ResultDetails from './ResultDetails';
import { withNavigation } from 'react-navigation';

const ResultList = (props) => {
    if(!props.restruants.length){
        return null
    }
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={props.restruants}
            keyExtractor={(restruant) => restruant.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity 
                        onPress={()=>props.navigation.navigate('ResultShow', {id: item.id})}>
                        <ResultDetails restruant={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultList);