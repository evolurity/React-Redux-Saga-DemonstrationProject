import {CREATE_POST} from "./types";
import {showWarning} from "./actions";

const forbidden = ['fuck', 'php']

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showWarning('You are spammer'))
                }
            }
            return next(action)
        }
    }
}