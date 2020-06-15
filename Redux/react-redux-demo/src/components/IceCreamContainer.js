import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
	return (
		<div>
			<h2>Number of Icecreams {props.numOfIcecreams}</h2>
			<button onClick={props.buyIceCream}>BUY Icecream</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		numOfIcecreams: state.numOfIceCreams
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buy: () => dispatch(buyIceCream())
	}
}

export default connect(mapStateToProps, { buyIceCream })(IceCreamContainer)
