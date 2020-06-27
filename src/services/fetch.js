const fetchMode = { mode: 'cors' };

class FetchService {

    get = async (url) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const request = new Request(`http://www.json-generator.com/api/json/get/${url}`, {
            method: 'GET',
            headers: headers,
        });

        return fetch(request, fetchMode).then((response) => {
                return (response.json());
            }
        );
    };

    post = async (url, body) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const request = new Request(`http://www.json-generator.com/api/json/get/${url}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });

        return fetch(request, fetchMode).then((response) => {
                return (response.json());
            }
        );
    };

    patch = async (url, body) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const request = new Request(`http://www.json-generator.com/api/json/get/${url}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(body)
        });

        return fetch(request, fetchMode).then((response) => {
                return (response.json());
            }
        );
    };
}

const fetchService = new FetchService();
export default fetchService;
