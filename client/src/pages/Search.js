import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import "../App.css";
import API from "../utils/API";

class SearchPage extends Component {
  state= {
    books:{},
    search: "",
  }

  searchBooks = query => {
    API.bookSearch(query)
    .then(res => this.setState({ books: res.data.items}))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  }

  render() {
    return (
      <div className="SearchPage">
        <Navbar/>
        <Jumbotron/>
        <Wrapper>
          <SearchBar 
          value={this.state.search} 
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}/>
          <ul>
             {Object.keys(this.state.books).map( key => <BookList
             key={key}
             index={key}
             details={this.state.books[key]}
             addToFavorites={this.addToFavorites}
             />)} 
          </ul>
        </Wrapper>
      </div>
    );
  }
}

export default SearchPage;
