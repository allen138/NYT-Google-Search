const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/NYT-Google-Search"
);

const bookSeed = [
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
    {
        title:"",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        date: new Date(Date.now())
    },
];

db.Book
.remove({})
.then(() => db.Book.collection.insertMany(bookSeed))
.then(data => {
    console.log(data.results.n + " records inserted!");
    process.exit(0);
})
.catch( err => {
    console.log(err);
    process.exit(1);
});
