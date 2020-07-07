import axios from 'axios';

const url = 'http://localhost:3000/api';

class IndexService{
    //Get posts
    static getPosts(){
        return new Promise(async (resolve, reject) =>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(indexData => ({
                        ...indexData
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }
}

export default IndexService;