import { receivePuppies, selectPuppy } from './action-creators';
import { combineReducers } from 'redux';

// we don't need this anymore bc we separate each part of the state into an individual reducer, and use combineReducers to put it together
    // var initialState = {
    //     allPuppies: [],
    //     selectedPuppy: {}
    //     }

function puppyReducer (state = [], action) {
    //var newState= Object.assign({}, state);

    switch (action.type) {
        case 'RECEIVE_PUPPIES': {
            return action.receivedPuppies
        }
        default: {
            return state
        }
    }
    //return newState
}

function selectedPuppyReducer (state = {}, action) {
    switch (action.type) {
        case 'SELECT_PUPPY':{
                return action.selectedPuppy
            }
        default: {
            return state
        }
    }
}

export default combineReducers({
    allPuppies: puppyReducer,
    selectedPuppy: selectedPuppyReducer
})
