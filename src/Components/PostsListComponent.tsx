import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function PostsListComponent() {

    // link to posts :
    const URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

    const [jsonData, setJsonData] = useState('')
    const [posts, setPosts] = useState<any>([])

    // fetch our data
    const fetchData = useRef(() => {})
    fetchData.current = () => {
        axios.get(`${URL}`)
        .then(({data}:any) => { return data})
        .then(data =>{
            console.log(data)
            setJsonData(JSON.stringify(data, null, 2) || "No data found")
            setPosts([...posts, ...data.results])
        })
        .catch(err =>{
            console.log("ERROR :", err)
        }
        )
    }

    // fetch on load data 
    useEffect(() => {
        fetchData.current()
    }, [])
    

    return (
        <div>
            <h1>Posts List </h1>
            { jsonData }

        </div>
    )
}

export default PostsListComponent
