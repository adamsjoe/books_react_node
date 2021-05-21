import React from 'react';
import axios from 'axios';
import './BookLibrary.css';
import BookTable from './BookTable';

class BookLibrary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        axios(process.env.REACT_APP_SERVER_URL)
            .then(result => this.setState({ books: result.data }))
            .catch(error => console.log(error));
    }

    handleDelete(id) {
        axios.delete(process.env.REACT_APP_SERVER_URL + '/' + id)
            .then(result=> {
                this.refresh();
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return <BookTable books={this.state.books} handleDelete={this.handleDelete} />
    }
}

export default BookLibrary;