import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_POST, REQUEST_POSTS} from "./types";
import {hideLoader, showLoader, showWarning} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_POST, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put(showWarning('something went wrong'))
    }

}

async function fetchPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return await response.json()
}


//
// return async dispatch => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//         const json = await response.json()
//         dispatch({type: FETCH_POST, payload: json})
//     } catch (e) {
//         dispatch(showWarning('something went wrong'))
//     }
// }