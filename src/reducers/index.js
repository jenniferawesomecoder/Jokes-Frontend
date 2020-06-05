import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import groupReducer from './groupReducer'
import jokeReducer from './jokeReducer'

const rootReducer = combineReducers({
  group: groupReducer,
  form: formReducer,
  jokes: jokeReducer

})

export default rootReducer
