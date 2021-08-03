export class BaseService {
    url = (uri) => `http://localhost:5000${uri}`
    ls = window.localStorage;

    async get(uri, options) {
        try {
            const response = await fetch(this.url(uri), {
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                },
                ...options
            });

            return response.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async post(uri, options) {
        try {
            const response = await fetch(this.url(uri), {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/json'
                },
                ...options
            });
            return response.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}