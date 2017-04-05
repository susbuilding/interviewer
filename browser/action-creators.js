export function receivePuppies(puppies){
    return {
        type: 'RECEIVE_PUPPIES',
        receivedPuppies: puppies
    }
}

export function AsyncReceivePuppies(){
    return function (dispatch){
        fetch('/api/puppies')
        .then(function (res) {
            return res.json();
        })
        .then( puppies => {
            const action = receivePuppies(puppies)
            dispatch(action)
        })
        .catch(function (err) {
            console.log(err)
        })
    }
}

export function selectPuppy(puppy){
    return {
        type: 'SELECT_PUPPY',
        selectedPuppy: puppy
    }
}

export function asyncSelectPuppy(puppyId){
    return function (dispatch){
        fetch(`/api/puppies/${puppyId}`)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then( puppy => {
            const action = selectPuppy(puppy)
            dispatch(action)
        })
        .catch(err => console.log(err))
        }
}

//some notes on if using axios instead of fetch
// axios.get('/api/puppies')
//     .then(res => res.data)
//     .then( puppies => dispatch(puppies))

// axios.get('/api/puppies')
//     .then( res => dispatch(res.data))
