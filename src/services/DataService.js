
class DataService {
    constructor() {
        this._storage = localStorage;
        this._dataKeyRestaurants = "restaurants"
    }
    getReviewedRestaurants() {
        const storedData = JSON.parse(this._storage.getItem(this._dataKeyRestaurants));

        return storedData ? storedData : null
    }
    addReviewedRestaurantsToStorage(restaurantsToAdded) {
        try {
            this._storage.setItem(JSON.stringify(restaurantsToAdded));
            return true;
        }
        catch {
            return false;
        }
    }
}

export default DataService;