import train_response from './GetRealtimeArrivals_Test';

class TrainResponseApi {
	static getTrainResponses() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(Object.assign([], train_response));
			}, 1000);
		});
	}
}
export default TrainResponseApi;