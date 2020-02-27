import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results="

export default {
    search: function (numResults) {
        return axios.get(BASEURL + numResults);
    }
}