import axios from "axios";

const apiKey="AIzaSyAO0kTy33t0rVkRxz_UYp4J_kVZ9Qr3Lxc";
const queryURL="https://www.googleapis.com/books/v1/volumes?q=";

export default {
    
    bookSearch: function(query) {
        return axios.get( queryURL + query + "&key=" + apiKey);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};
