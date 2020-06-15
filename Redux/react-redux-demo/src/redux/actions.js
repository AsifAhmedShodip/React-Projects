import { BUY_CAKE } from './types'
import { TOTAL_ITEMS } from './types'
import { BUY_ICECREAM } from './types'

export const buyCake = (number) => (dispatch) => {
	dispatch({
		type: BUY_CAKE,
		payload: number
	})
	dispatch({
		type: TOTAL_ITEMS
	})
}

export const buyIceCream = () => (dispatch) => {
	dispatch({
		type: BUY_ICECREAM
	})
	dispatch({
		type: TOTAL_ITEMS
	})
}

export const totalItems = () => (dispatch) => {
	return {
		type: TOTAL_ITEMS
	}
}
