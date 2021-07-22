import { GET_PHOTOS_FAIL, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../../Redux/types/getPhotoStatus'
import axios from 'axios'

export const getPhotosAction = (albumId) => async (dispatch) => {
    try {
        dispatch(getPhotoRequest());
        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);

        return dispatch(getPhotoSuccess(res))
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            const errorMessage = await err.response.data;
            return dispatch(getPhotoFail(errorMessage))

        }else{
            return dispatch(getPhotoFail('Network Fails'))
        }

    }
}

export const getPhotoRequest = () => {
    return {
        type: GET_PHOTOS_REQUEST
    }
}

export const getPhotoSuccess = (data) => {
    return {
        type: GET_PHOTOS_SUCCESS,
        payload: data
    }
}

export const getPhotoFail = (error) => {
    return {
        type: GET_PHOTOS_FAIL,
        payload: error
    }
}