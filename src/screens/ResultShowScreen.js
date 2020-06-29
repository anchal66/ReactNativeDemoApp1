import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import yelp from '../api/yelp';

export default ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    console.log('rest',result)

    const getRestraunt =async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(()=>{
        getRestraunt(id);
    },[]);

    return <Text>Testing</Text>
}
const styles = StyleSheet.create({});