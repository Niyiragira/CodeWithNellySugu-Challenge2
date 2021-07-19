import { combineReducers } from 'redux';
import getPhotosReducers from './getPhotosReducers'

const allReducers = combineReducers({
    getPhotos: getPhotosReducers,
});

export default allReducers;
