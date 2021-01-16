const fetchMode = { mode: 'cors' };

const baseUrl = 'https://cryptic-peak-36539.herokuapp.com/'

class FetchService {

    get = async (url) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        const request = new Request(`${baseUrl}${url}`, {
            method: 'GET',
            headers: headers,
        });

        return fetch(request, fetchMode).then((response) => {
            return (response.json());
        })
        .catch((error) => {
                return ([]);
            }
        );
    };

    post = async (url, body) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });

        return fetch(request, fetchMode).then((response) => {
            return (response.json());
        });
    };

    patch = async (url, body) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const request = new Request(`${baseUrl}${url}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(body)
        });

        return fetch(request, fetchMode).then((response) => {
            return (response.json());
        });
    };
}

const fetchService = new FetchService();
export default fetchService;
