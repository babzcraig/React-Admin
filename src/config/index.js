const allConfig = {
	development: {
		API_BASE_URL: 'https://api.github.com'
	},
	production: {
		API_BASE_URL: 'https://api.github.com'
	}
};

export const config = allConfig[process.env.NODE_ENV];