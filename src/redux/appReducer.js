import {HIDE_LOADER, HIDE_WARNING, SHOW_LOADER, SHOW_WARNING} from "./types";

const initialState = {
    loading: false,
    warning: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_WARNING:
            return {...state, warning: action.payload}
        case HIDE_WARNING:
            return {...state, warning: false}
        default:
            return state
    }
}