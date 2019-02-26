import React from "react";

class BookList extends React.Component {
    handleClick = () => {
        this.props.addToFavorites(this.props.index);
    }
    render() {
        const { title, authors, description, infoLink } = this.props.details.volumeInfo;
        const { thumbnail } = this.props.details.volumeInfo.imageLinks
        return (
            <div className="books">
                    <li className="bookList">
                        <button className="saveBook btn btn-outline-info" onClick={this.handleClick}> Save </button>
                        <img src={ thumbnail } alt={ title }/>
                        <h3 className="bookTitle">{ title }</h3>
                        <h5 className="bookAuthor">{ authors }</h5>
                        <p>{ description }</p>
                        <a className="bookLink" href={ infoLink }>Google Books Link</a>
                    </li>
            </div>
        )
    }
}

export default BookList;
