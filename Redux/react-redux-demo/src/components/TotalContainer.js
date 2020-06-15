import React from 'react'
import { connect } from 'react-redux'

import {totalItems} from '../redux'

function TotalContainer(props) {
    return (
        <div>
            <h2>Total Items {props.numOfTotalItems}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
		numOfTotalItems: state.numOfTotalItems
	}
}

export default connect(mapStateToProps, null)(TotalContainer)
