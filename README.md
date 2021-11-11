# serverless-api

serverless-api is a JavaScript library handling AWS Lambda REST API functions for a Dynamo DataBase.

## Installation

use the following dependencies.

```
"dependencies": {
    "dynamoose": "^2.8.2"
  }
```

Then run the following Node Package Manager Command

```
npm install
```

## UML

![UML](/images/uml.png)

## Usage

API Routes /people

# GET:

Takes in the following Schema from our DynamoDB

```
const peopleSchema = new dynamoose.Schema({
	id: Number,
	name: String,
	age: Number,
	location: String,
});

```

### returns an object containing all items within the DB

# POST:

Takes in the following Schema from our DynamoDB

```
const peopleSchema = new dynamoose.Schema({
	id: Number,
	name: String,
	age: Number,
	location: String,
});

```

Generates a random ID through the 3rd party Node package `uuid`. Assigns the ID to a `body:` param which is and is passed into the DB and saved.

### OutPut:

returns an object containing all items within the DB.

# PUT:

Takes in query reference to ID associated with an Item in the DynamoDB.
Uses the following Schema to update an exisiting record.

```
const peopleSchema = new dynamoose.Schema({
	id: Number,
	name: String,
	age: Number,
	location: String,
});

```

### OutPut:

returns an updated object and saves the updated information in the DB.

# DELETE:

Takes in query reference to ID associated with an Item in the DynamoDB.

### OutPut:

Deletes and item from the DB.

## Contributors

Jacob Gregor - Author  
GITHUB REPO - "https://github.com/Code-Fellows-401/serverless-api/issues"

## License

[MIT](https://choosealicense.com/licenses/mit/)
