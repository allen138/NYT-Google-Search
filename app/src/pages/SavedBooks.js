import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import BookList from "../components/BookList";

class SavedBooks extends React.Component {
    render() {
        return (
            <div className="SavedBooksPage">
                <Navbar />
                <Jumbotron />
                <Wrapper>
                    <h2>Favorite Books</h2>
                    <ul>
                        {Object.keys(this.state.favorites).map(key => <BookList
                            key={key}
                        />)}
                    </ul>
                </Wrapper>
                <Footer />
            </div>
        )
    }
}

export default SavedBooks;