import * as ActionType from '../ActionType'

const initialState = {
    post: [],
    isLoading: false,
    error: null,
}
export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_DATA:
            return {
                ...state,
                post: action.payload,
            }
        case ActionType.POST_DATA:
            return {
                ...state,
                post: state.post.concat(action.payload),
            }
        case ActionType.DELETE_DATA:
            return {
                ...state,
                post: state.post.filter((i) => i.id !== action.payload)
            }

        case ActionType.PUT_DATA:
            return {
                ...state,
                post: state.post.map((i) => {
                    if (i.id === action.payload.id) {
                        return action.payload
                    } else {
                        return i
                    }
                })
            }

        default:
            return state
    }
}