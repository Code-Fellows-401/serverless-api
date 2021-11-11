const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
	id: String,
	name: String,
	age: Number,
	gender: String,
});

const peopleTable = dynamoose.model('lab-18-people', peopleSchema);

module.exports = peopleTable;
