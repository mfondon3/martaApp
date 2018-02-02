/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "$" }]*/
'use strict';
import React from 'react';
import Select from 'react-select';
import {TRAIN_STATIONS} from '../constants.jsx';
import DestinationTable from './DestinationTable.jsx';
import '../../node_modules/react-select/dist/react-select.css';
import api_key from '../../../marta_api_key.json';
import TrainResponseApi from '../api/mockTrainResponseApi';

class MartaApp extends React.Component {
	constructor() {
		super();
		this.state = {
			disabled: false,
			searchable: true,
			selectValue: 'AIRPORT',
			clearable: true,
			rtl: false,
			destinations: null,
			loading: false
		};
	}

	getStationList() {

	}

	updateValue(newValue) {
		let destinations = [];

		this.setState({
			loading: true
		});


		TrainResponseApi.getTrainResponses().then(response => {
			response.forEach(train => {
				let station = newValue + ' STATION';
				if (train.STATION == station) {
					destinations.push(train);
				}
			});
			this.setState({
				selectValue: newValue,
				destinations: destinations,
				loading: false
			});
		});

	}

	createDestinationRow(destination) {
		return (
			<tr key={destination.TRAIN_ID}>
				<td>destination.DIRECTION</td>
				<td>destination.LINE</td>
				<td>destination.ARRIVAL_TIME</td>
				<td>destination.STATUS</td>
			</tr>
		);
	}

	render() {
		return (
			<div>
				<div className="section">
					<h3 className="section-heading">Train Stations</h3>
					<Select
						id="train-select"
						ref={(ref) => {
							this.select = ref;
						}}
						onBlurResetsInput={false}
						onSelectResetsInput={false}
						searchable={this.state.searchable}
						options={TRAIN_STATIONS}
						name="selected-train"
						simpleValue
						autoFocus
						rtl={this.state.rtl}
						value={this.state.selectValue}
						onChange={this.updateValue.bind(this)}/>
				</div>
				<DestinationTable destinations={this.state.destinations} loading={this.state.loading}/>
			</div>
		);
	}
}

function toTitleCase(str)
{
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export default MartaApp;

/*
	fetch('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apiKey=' + api_key.api_key)
		.then(response => {
			console.log('Got Response');
		});
*/
