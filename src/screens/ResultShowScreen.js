import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';

export default ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    console.log('id', id)
    return <Text>Testing</Text>
}
const styles = StyleSheet.create({});