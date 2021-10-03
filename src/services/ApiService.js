

class ApiService {
    constructor(apiKey) {
        // this.apiKey = apiKey;

        this._enpoint = "https://6157ff895167ba00174bb9ed.mockapi.io/hw3/Restaurants"
    }
    async getReviews() {
        // https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?locale=tr_TR&location=ist
        try {
            const response = await fetch(this._enpoint);

            return await response.json();
        } catch (error) {
            console.log(error)
        }
    }

    async deleteReview(id) {
        const response = await fetch(`${this._enpoint}/${id}`, {
            method: "DELETE"
        });
        const json = await response.json();

        return json;
    }

    async editReview(data) {
        const response = await fetch(`${this._enpoint}/${data.id}`, {
            method: "PUT",
            body: data
        });
        const json = await response.json();

        return json;
    }
}

export default ApiService;