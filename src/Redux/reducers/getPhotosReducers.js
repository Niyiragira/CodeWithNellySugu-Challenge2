import { GET_PHOTOS_FAIL, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../types/getPhotosType'

const initialState = {
    loading: 'before',
    items: [],
    error: ''
}

const getUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return {
                ...state,
                loading: 'block'
            };
        case GET_PHOTOS_SUCCESS:
            return {
                loading: 'none',
                items: action.payload,
                error: ''
            };
        case GET_PHOTOS_FAIL:
            return {
                loading: 'none',
                items: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default getUserReducer;
