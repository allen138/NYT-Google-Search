import React from 'react';

const FavoritesList = props => {
    const { title, authors, description, link, image } = props.details
    return (
        <li className="bookList">
            <button className="saveBook btn btn-outline-danger" onClick={() => props.deleteBook(props.details._id)}> Delete </button>
            <img src={ image } alt={ title } />
            <h3 className="bookTitle">{ title }</h3>
            <h5 className="bookAuthor">{authors}</h5>
            <p>{description}</p>
            <a className="bookLink" href={ link }>Google Books Link</a>
        </li>
    );
};

export default FavoritesList;
