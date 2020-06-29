import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../../components/SearchBar';
import yelp from '../../api/yelp';

export default SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [restruants, setRestruants] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setRestruants(response.data.businesses);
        }
        catch(e){
            setErrMsg('Something went wrong');
        }
    };
    //Below can be done but it is bad code dont do
    //As it will call many times as set state is setted and endless loops occur
    //searchApi('pasta');

    useEffect(()=>{
        searchApi('pasta');
    },[])
    // it will call arrow func one time after first time compo renders
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