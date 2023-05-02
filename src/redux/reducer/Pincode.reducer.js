import * as ActionType from '../ActionType'

const initialState = {
    PinCodes: [],
    isLoading: false,
    error: null,
}

export const PinCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_PIN:
            return {
                ...state,
                PinCodes: action.payload,
            }
        case ActionType.POST_PIN:
            return {
                ...state,
                PinCodes: state.PinCodes.concat(action.payload),
            }
        case ActionType.DELETE_PIN:
            return {
                ...state,
                PinCodes: state.PinCodes.filter((i) => i.id !== action.payload)
            }
        case ActionType.PUT_PIN:
            return {
                ...state,
                PinCodes: state.PinCodes.map((i) => {
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