import { BUY_CAKE } from './types'
import { BUY_ICECREAM } from './types'
import { TOTAL_ITEMS } from './types'

const initialState = {
	numOfCakes: 10,
	numOfIceCreams: 10,
	numOfTotalItems: 20
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1
			}
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1
			}
		case TOTAL_ITEMS:
			return {
				...state,
				numOfTotalItems: state.numOfTotalItems - 1
			}

		default:
			return state
	}
}

export default reducer
