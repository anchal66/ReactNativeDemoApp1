import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer gIHaSrTPl-YKvTmM1YvGRaS6u1pAiyNJQ06CaeZoVkFj0nQPUXJdMp0iEzJhjBOtFouqR7bi3d-paewlFPY2R5mLW9rXqHmzNMm54Jpvcb7XZjSiuYhSX3oXGWz4XnYx'
    }
});

