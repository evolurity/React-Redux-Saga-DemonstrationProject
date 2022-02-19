import {CREATE_POST, HIDE_LOADER, HIDE_WARNING, REQUEST_POSTS, SHOW_LOADER, SHOW_WARNING} from "./types";

export function createPost(post) {
    return {type: CREATE_POST, payload: post}
}

export function fetchPosts() {
    return {type: REQUEST_POSTS}
}

export function hideLoader() {
    return {type: HIDE_LOADER}
}

export function showLoader() {
    return {type: SHOW_LOADER}
}

export function showWarning(text) {
    return dispatch => {
        dispatch({type: SHOW_WARNING, payload: text})
        setTimeout(() => dispatch({type: HIDE_WARNING}), 2000)
    }
}