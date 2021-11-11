const peopleTable = require('./schema');
const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');

exports.handler = async (event) => {
	const jsonBody = JSON.parse(event.body);
	let data = null;
	let status = 500;

	try {
		let id = uuid();
		console.log(id);
		let person = new peopleTable({ id, ...jsonBody });
		data = await person.save();
		console.log(person);
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
