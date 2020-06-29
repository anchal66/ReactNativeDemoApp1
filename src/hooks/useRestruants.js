import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    
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

    useEffect(()=>{
        searchApi('pasta');
    },[]);

    return [searchApi, restruants, errMsg]
}