/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "$" }]*/
'use strict';
import React from 'react';
import 'babel-polyfill';
import '../../node_modules/react-select/dist/react-select.css';


class DestinationTable extends React.Component {
	constructor() {
		super();
	}


	createDestinationRow(destination, key) {
		let finalDestination = destination.DESTINATION;
		if (finalDestination === '' && destination.DIRECTION === 'S') {
			finalDestination = 'Airport';
		}
		return (
			<tr key={key}>
				<td>{finalDestination}</td>
				<td>{destination.DIRECTION}</td>
				<td>{destination.LINE}</td>
				<td>{destination.NEXT_ARR}</td>
				<td>{destination.WAITING_TIME}</td>
			</tr>
		);
	}

	render() {
		if (this.props.destinations == null && this.props.loading === false) {
			return (
				<div>
				</div>
			);
		}

		if(this.props.loading === true) {
			return (
				<div>
					Loading...
				</div>
			)
		}

		return (
			<table>
				<tbody>
					<tr>
						<th>Destination</th>
						<th>Direction</th>
						<th>Line</th>
						<th>Arrival Time</th>
						<th>Status</th>
					</tr>
					{this.props.destinations.map((destination, i) => {
						return this.createDestinationRow(destination,i);
					})}
				</tbody>
			</table>
		);
	}
}

export default DestinationTable;

/*
	fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apiKey=' + api_key.api_key)
		.then(response => {
			console.log('Got Response');
		});
*/
