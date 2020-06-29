import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../../components/SearchBar';
import useRestruants from '../hooks/useRestruants';
import ResultsList from '../../components/ResultsList';

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
        <ResultsList title="Cost Effective"/>
        <ResultsList title="Bit Pricy"/>
        <ResultsList title="Big Spender"/>
    </View>
}
const styles = StyleSheet.create({});