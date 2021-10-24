import { useEffect, useState } from 'react';
import axios from 'axios';
import PostData from '../Interfaces/PostData';
import Post from './Post';

function PostsList() {

    // link to posts :
    const URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

    const [posts, setPosts] = useState<any>([])

    // fetch the posts data, 
    const fetchData = () => {
        axios.get(`${URL}`)
        .then(({data}:any) => { return data})
        .then(data =>{
            setPosts([...data])
        })
        .catch(err =>{
            console.log("ERROR :", err)
        }
        )
    }

    // fetch on load data 
    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <div>
            <h1>Posts List </h1>
            {posts.map((post:PostData, id:number) => 
                <Post key={id} postData={post}/>
            )}
        </div>
    )
}

export default PostsList
