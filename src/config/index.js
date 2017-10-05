const allConfig = {
	development: {
		API_BASE_URL: 'https://ifd-api.herokuapp.com'
	},
	production: {
		API_BASE_URL: 'https://ifd-api.herokuapp.com'
	}
};

export const config = allConfig[process.env.NODE_ENV];
