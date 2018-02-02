'use strict';
import React from 'react';
import MartaApp from './martaApp';

class App extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1>Marta Rail Transit Schedule</h1>
				</div>
				<div>
					<MartaApp />
				</div>
			</div>
		);
	}
}
module.exports = App;
