import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]); //!!!! need to return new instance of state, not change the old one
      // return [action.payload.data, ...state]; //es6
      break;
    default:

  }

  return state;
}
