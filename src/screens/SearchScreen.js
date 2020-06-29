import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../../components/SearchBar';
import yelp from '../../api/yelp';

export default SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [restruants, setRestruants] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose'
                }
            });
            setRestruants(response.data.businesses);
        }
        catch(e){
            setErrMsg('Something went wrong');
        }
    };

    return <View>
        <SearchBar
            term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={searchApi} />
        {errMsg ? <Text>{errMsg}</Text>: null}
        <Text>Found: {restruants.length} results</Text>
    </View>
}
const styles = StyleSheet.create({});