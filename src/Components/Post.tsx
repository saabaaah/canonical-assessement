import React from 'react'

function Post(props:any) {

    let {postData} = props;
    return (
        <div>
            <p>Link : {postData.link} </p>
            <p>group : {postData.group} </p>
            <p>featured_media : {postData.featured_media} </p>
            <p>title : {postData.title.rendered} </p>
            <p>authors : {postData.authors} </p>
            <p>date : {postData.date} </p>
            <p>categories : {postData.categories} </p>

            <hr/>
        </div>
    )
}
export default Post
