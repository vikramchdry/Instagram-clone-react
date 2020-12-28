import { Avatar } from '@material-ui/core'
import React from 'react'
import './styles/Post.css';
function Post({ username, caption, imageUrl }) {
    return (

        <div className="post">
            {/*User Name*/}
            {/*Avatar*/}
            {/*Image*/}
            {/*caption*/}
            <div className="post__header">
                <Avatar className="post__avatar" />
                <h3>{username}</h3>
            </div>

            <img className="post__image" src={imageUrl}
                alt="" />
            <h4 className="post__text"><strong>{username}</strong>Wow it is nice Picture</h4>
        </div>
    )
}

export default Post;
