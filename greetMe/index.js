import moment from 'moment';
const greeting = {
	en: 'Hello',
	fr: 'Bonjour',
	de: 'Hallo'
};

exports.handler = async (event) => {
	let name = event.pathParameters.name;
	let { lang, ...info } = event.queryStringParameters;

	let message = `${greeting[lang] ? greeting[lang] : greeting['en']} ${name}`;
	let response = {
		message: message,
		info: info,
		timestamp: moment().unix()
	};

	return {
		statusCode: 200,
		body: JSON.stringify(response)
	};
};