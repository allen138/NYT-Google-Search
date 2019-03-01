import axios from "axios";

const apiKey="AIzaSyAO0kTy33t0rVkRxz_UYp4J_kVZ9Qr3Lxc";
const queryURL="https://www.googleapis.com/books/v1/volumes?q=";

export default {
    
    // query for google books api
    bookSearch: function(query) {
        return axios.get( queryURL + query + "&key=" + apiKey);
    },
    // save the favorites book to db
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // get all saved books from db
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    // delete saved book
     deleteSavedBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};
