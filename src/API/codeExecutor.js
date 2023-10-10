import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
export const postCode = async (settings) => {
	const options = {
		method: "POST",
		url: "https://online-code-compiler.p.rapidapi.com/v1/",
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key": "process.env.RAPIDAPI_KEY",
			"X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
		},
		data: {
			language: settings.language,
			version: "latest",
			code: settings.code,
			input: null,
		},
	};
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
};
