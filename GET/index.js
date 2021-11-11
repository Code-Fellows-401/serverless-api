const dynamoose = require('dynamoose');

// schema to match our DB
// variable to house our db model
const peopleTable = require('./schema');

exports.handler = async (event) => {
	// TODO implement

	let data = null;

	// await on our model.scan() to retreive the data from db
	try {
		console.log('in the try');
		data = await peopleTable.scan().exec();
		console.log('this is the data', data);
		const response = {
			statusCode: 200,
			body: JSON.stringify(data),
		};
		return response;
	} catch (err) {
		console.log(err);
		data = new Error(err);
		const response = {
			statusCode: 400,
			body: JSON.stringify(data),
		};
		return response;
	}
};
