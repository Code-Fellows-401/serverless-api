const dynamoose = require('dynamoose');

// schema to match our DB
// variable to house our db model
const peopleTable = require('./schema');

exports.handler = async (event) => {
	// TODO implement

	let data = null;
	const id = event.pathParameters.id;

	try {
		data = await peopleTable.query('id').eq(id).exec();
		const response = {
			statusCode: 200,
			body: JSON.stringify(data),
		};
		return response;
	} catch (err) {
		data = new Error(err);
		const response = {
			statusCode: 400,
			body: JSON.stringify(data),
		};
		return response;
	}
};
