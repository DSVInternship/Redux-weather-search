import { FETCH_WEATHER_FULFILLED, FETCH_WEATHER_REJECTED } from '../actions/index';

export default function(state=[]
, action){
  switch (action.type) {
    case FETCH_WEATHER_FULFILLED:
      console.log(action.payload);
      return [...state, action.payload.data];
  }
  return state;
}
