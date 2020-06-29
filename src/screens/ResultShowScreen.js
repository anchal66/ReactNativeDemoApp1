import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

export default ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getRestraunt =async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(()=>{
        getRestraunt(id);
    },[]);
    if(!result){
        return null
    }
    return (
        <FlatList 
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return(
                <Image 
                    style={styles.imageStyle} 
                    source={{uri: item}} />
                )
            }}
        />
    )
}
const styles = StyleSheet.create({
    imageStyle:{
        height: 200,
        width: 300
    }
});