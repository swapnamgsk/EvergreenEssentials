import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './PlantReducer/Reducer'
const rootReducer =combineReducers({dataReducer})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
