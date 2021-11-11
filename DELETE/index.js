const peopleTable = require('./schema');
require('dynamoose');

exports.handler = async (event) => {
	let data = null;
	let status = null;

	try {
		let id = event.queryStringParameters && event.queryStringParameters.id;
		data = await peopleTable.delete({ id: id });
		status = 200;
	} catch (err) {
		status = 400;
		data = new Error(err);
	}
	const response = {
		statusCode: status,
		body: JSON.stringify(data),
	};
	return response;
};
