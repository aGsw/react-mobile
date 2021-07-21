import { createStore,combineReducers } from "redux";
import map from './reducers/map'

let mainRedcer = combineReducers({
    map
})

const store = createStore(
    mainRedcer,
    window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()

)
const { dispatch,getState,subscribe} = store

export {store as default,dispatch,getState,subscribe}