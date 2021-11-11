const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
	id: Number,
	name: String,
	age: Number,
	location: String,
});

const peopleTable = dynamoose.model('people', peopleSchema);

module.exports = peopleTable;
