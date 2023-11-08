import { combineReducers } from "redux";

//state initial
const initialState = {
    status: 'void',
    data: null,
    error: null,
}

//actions
const FETCHING = 'user/fetching'
const RESOLVED = 'user/resolved'
const REJECTED = 'user/rejected'
 
const userFetching = () => ({ type: FETCHING });
const userResolved = (data) => ({ type: RESOLVED, payload: data });
const userRejected = (error) => ({ type: REJECTED, payload: error });

//reducer
combineReducers()


//appel api
export async function fetchLogin(store) {
    const status = selectUser(store.getState()).status
    if (status === 'pending' || status === 'updating') {
        return
    }
    store.dispatch(userFetching())
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login')
        const data = await response.json()
        store.dispatch(userResolved(data))
    } catch (error) {
        store.dispatch(userRejected(error))
    }
}
initialState()

function selectUser(state) {
    return state.user;
  }