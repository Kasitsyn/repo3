import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    // debugger
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let postOnChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<MyPosts 
        addPost={addPost} 
        postOnChange={postOnChange} 
        posts={state.profilePage.postData}
        newPostText={state.profilePage.newPostText} />)

}
export default MyPostsContainer