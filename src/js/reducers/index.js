import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer.js';

const rootReducer = combineReducers({
  weather: WeatherReducer,
});

export default rootReducer;
