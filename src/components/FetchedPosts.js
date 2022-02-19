import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post";
import {fetchPosts, hideLoader, showLoader} from "../redux/actions";

const FetchedPosts = () => {
    const posts = useSelector(state => state.posts.fetchedPosts)
    const isLoading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()
    const onUpload = () => {
        dispatch(showLoader())
        dispatch(fetchPosts())
        dispatch(hideLoader())
    }
    if (isLoading) {
        return <p>'Loading...'</p>
    }

    if (!posts.length && !isLoading) {
        return <button
            className="btn btn-primary"
            onClick={onUpload}
        >Upload</button>
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
};

export default FetchedPosts;