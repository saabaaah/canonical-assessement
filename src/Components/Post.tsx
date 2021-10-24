import React from 'react'

function Post(props:any) {

    let {postData} = props;
    return (
        <div>
            {postData.link}

            <hr/>
        </div>
    )
}
export default Post
