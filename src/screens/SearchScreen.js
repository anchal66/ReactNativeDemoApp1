import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../../components/SearchBar';
import useRestruants from '../hooks/useRestruants';
import ResultsList from '../../components/ResultsList';

export default SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, restruants, errMsg] = useRestruants();

    const filterResultByPrice = (price)=>{
        return restruants.filter(restruant=>{
            return restruant.price === price;
        })
    }
    
    return <View>
        <SearchBar
            term={term}
             onTermChange={newTerm => setTerm(newTerm)}
             onTermSubmit={()=>searchApi()} />
        {errMsg ? <Text>{errMsg}</Text>: null}
        <Text>Found: {restruants.length} results</Text>
        <ResultsList restruants={filterResultByPrice('$')} title="Cost Effective"/>
        <ResultsList restruants={filterResultByPrice('$$')} title="Bit Pricy"/>
        <ResultsList restruants={filterResultByPrice('$$$')} title="Big Spender"/>
    </View>
}
const styles = StyleSheet.create({});