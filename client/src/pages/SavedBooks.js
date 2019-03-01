import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import FavoritesList from "../components/FavoritesList";
import API from "../utils/API";

class SavedBooks extends React.Component {
    state = {
        favorites: {},
    }
    componentDidMount() {
        API.getSavedBooks()
        .then(res => 
            this.setState(
                { favorites: res.data
        })).catch(err => console.log(err));
    }

    loadFavorites = () => {
        API.getSavedBooks()
        .then(res => 
            this.setState(
                { favorites: res.data
        })).catch(err => console.log(err));
    }

    deleteBook = id => {
        API.deleteSavedBook(id)
        .then(res => this.loadFavorites())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="SavedBooksPage">
                <Navbar />
                <Jumbotron />
                <Wrapper>
                    <h2>Favorite Books</h2>
                    <ul>
                        {Object.keys(this.state.favorites).map( key => <FavoritesList
                            key={key}
                            details={this.state.favorites[key]}
                            deleteBook={this.deleteBook}
                            />)}
                    </ul>
                </Wrapper>
            </div>
        )
    }
}

export default SavedBooks;