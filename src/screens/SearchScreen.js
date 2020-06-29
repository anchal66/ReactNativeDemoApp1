import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../../components/SearchBar';
import useRestruants from '../hooks/useRestruants';

export default SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, restruants, errMsg] = useRestruants();
    
    return <View>
        <SearchBar
            term={term}
             onTermChange={newTerm => setTerm(newTerm)}
             onTermSubmit={()=>searchApi()} />
        {errMsg ? <Text>{errMsg}</Text>: null}
        <Text>Found: {restruants.length} results</Text>
    </View>
}
const styles = StyleSheet.create({});