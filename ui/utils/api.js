const SERVER_URI =
	process.env.NEXT_PUBLIC_BASE_SERVER_URI || 'http://localhost:5000';

const service = (serviceName, params) => {
	const service = {
		products: {
			url: `${SERVER_URI}/products`,
		},
		categories: {
			url: `${SERVER_URI}/categories`,
		},
		banners: {
			url: `${SERVER_URI}/banners`,
		},
		addToCart: {
			method: 'POST',
			url: `${SERVER_URI}/addToCart`,
			body: params,
		},
	};
	return service[serviceName];
};

const customRequestHandler = async (serviceName, data = {}) => {
	const { method = 'GET', url, body } = service(serviceName, data);
	const response = await fetch(url, {
		method,
		body: JSON.stringify(body),
	});
	return await response.json();
};

export default customRequestHandler;
