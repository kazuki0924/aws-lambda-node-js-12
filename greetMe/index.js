let messages = [
	'Hello World!',
	'Hello Serverless!',
	"It's a great day today!",
	"Yay, I'm learning something new today!",
	'On cloud nine!',
	'Over the moon!',
	'Shooting for the stars!',
	'On top of the World!',
	'World at my feet!',
	'Doing everything I love!'
];

exports.handler = async (event) => {
	// TODO implement
	let message = messages[Math.floor(Math.random() * 10)];
	console.error('An error occurred');
	console.log('A log message ');
	console.info('An informative message');
	console.warn('Warning message');

	const response = {
		statusCode: 200,
		body: JSON.stringify(message)
	};
	throw new Error('This is a random error!');
	return response;
};
