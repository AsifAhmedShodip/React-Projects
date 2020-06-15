const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
	return {
		type: BUY_CAKE
	}
}

const initState = {
	numOfCakes: 10
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1
            }
        default : return state
	}
}

const store = redux.createStore(reducer)
console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => console.log('Update ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()
