const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/GoogleBookSearch"
);

const bookSeed = [
    {
        title:"test",
        author: "mongo",
        synopsis: "a database",
        image: "image.jpg",
        link: "https://google.com",
        date: new Date(Date.now())
    },
    {
        title:"test2",
        author: "mongod",
        synopsis: "another connection",
        image: "backend.png",
        link: "https://yahoo.com",
        date: new Date(Date.now())
    }
];

db.Book
.remove({})
.then(() => db.Book.collection.insertMany(bookSeed))
.then(data => {
    console.log(data.results + " records inserted!");
    process.exit(0);
})
.catch( err => {
    console.log(err);
    process.exit(1);
});
