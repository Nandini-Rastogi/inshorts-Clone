import axios from 'axios';

export const getNews = async () =>{
    const URL = 'https://inshortsclone1.onrender.com';
    try{
        return await axios.get(`${URL}/news`);
    }catch(error){
        console.log('Error while calling news api', error);
    }
}
