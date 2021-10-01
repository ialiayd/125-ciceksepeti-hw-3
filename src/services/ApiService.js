

class ApiService {
    constructor(apiKey) {
        // this.apiKey = apiKey;
        this._apiKey = "9669wkZHVV65H7ig73dj_MIKaccfg2TzYtA3byu-pDYWvoAZUekjf4pEylqs42ZUeihlhByw0QW4DQbg9BYZnSQh97H2gJUxCvY1w-AfclgbhW2wrKD45QM4V321X3Yx";
        this._auth = 'Bearer ' + this._apiKey;
    }
    async getRestaurants() {
        // https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?locale=tr_TR&location=ist
        const response = await fetch("/businesses/search?locale=tr_TR&location=ist&term=restaurants", {
            headers: {
                'Authorization': this._auth,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        return await response.json();
    }
}

export default ApiService;