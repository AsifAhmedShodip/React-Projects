import React from 'react';
import bg from '../images/bg.jpg'

export default function Notification() {
	return (
		<div className="notifications">
			<div className="contents">
				<small>Subscribe Our Channel and Never miss any update.</small>
				<p>
					<a>PREV</a> <a>NEXT</a>
				</p>
			</div>
			<div className="notifications-img">
				<img src={bg} />
			</div>
		</div>
	);
}
