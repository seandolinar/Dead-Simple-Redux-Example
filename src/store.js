import { createStore} from 'redux'
import reducer from './reducer'

const initialState = 'off'

//create the store with the reducer and the initial state of the store
// this gets passed into the <Provider> component in App.jsx
export default createStore(
        reducer,
        initialState
    )

