import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../../components/SearchBar';

export default SearchScreen = () => {

    const[term, setTerm] = useState('');
    
    return <View>
        <SearchBar 
        term={term} 
        onTermChange={newTerm=>setTerm(newTerm)}
        onTermSubmit={console.log('submitted')}
        />
        <Text>In Serach</Text>
        <Text>{term}</Text>
    </View>
}
const styles = StyleSheet.create({});