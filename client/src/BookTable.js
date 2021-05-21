import React from 'react';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './BookTable.css';
import { Link } from 'react-router-dom';

function BookTable(props) {

    let books = props.books.map((book) => {

        // the date is a time date, so just extract the first 4
        let date = book.published.toString().substr(0,4);

    return (
        <tr key={book.id}>
            <td>{book.author}</td>
            <td>{book.title}</td>
            <td>{date}</td>
            <td><Link to={'/edit/' + book.id}><EditIcon /></Link></td>
            <td><Link onClick={() => {if (window.confirm('Really delete this book?')) props.handleDelete(book.id)}} to={'/'}><DeleteForeverIcon /></Link></td>
        </tr>)
    });
    
    return (<div>
        <table>
            <thead>
            <tr><th>Author</th><th>Title</th><th>Published</th></tr>
            </thead>
            {books}
        </table>
    </div> );
}

export default BookTable;