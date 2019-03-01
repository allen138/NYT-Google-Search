import React from "react";
import API from "../utils/API";

class BookList extends React.Component {
    handleClick = () => {
        API.saveBook({
            title: this.props.details.volumeInfo.title,
            authors: this.props.details.volumeInfo.authors,
            description: this.props.details.volumeInfo.description,
            image: this.props.details.volumeInfo.imageLinks.thumbnail,
            link: this.props.details.volumeInfo.infoLink
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    render() {
        const { title, authors, description, infoLink } = this.props.details.volumeInfo;
        const { thumbnail } = this.props.details.volumeInfo.imageLinks
        return (
            <div className="books">
                <li className="bookList">
                    <button className="saveBook btn btn-outline-info" onClick={this.handleClick}> Save </button>
                    <img src={thumbnail} alt={title} />
                    <h3 className="bookTitle">{title}</h3>
                    <h5 className="bookAuthor">{authors}</h5>
                    <p>{description}</p>
                    <a className="bookLink" href={infoLink}>Google Books Link</a>
                </li>
            </div>
        )
    }
}

export default BookList;
