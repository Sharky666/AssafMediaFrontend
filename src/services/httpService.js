import axios from "axios";

const httpService = {
    get: async function(url) {
        return axios.get(url).then( value => {
            return value;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
    },

    post: async function(url, data) {
        return axios.post(url, data).then( value => {
            return value;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
    }
};

export default httpService;