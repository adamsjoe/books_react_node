import React from 'react';
import axios from 'axios';
import './BookLibrary.css';
import BookTable from './BookTable';

class BookLibrary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            loading: false,
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        this.setState({loading: true});

        axios(process.env.REACT_APP_SERVER_URL)
            .then(result => this.setState({ loading: false, books: result.data }))
            .catch(error => {
                this.setState({ loading: false }); 
                console.log(error)
            });
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
        let content = '';

        if(this.state.loading) {
            content = <div className='loading'>Loading...</div>
        } else {
            content = <BookTable books={this.state.books} handleDelete={this.handleDelete} />  
        }
        
        return content;
    }
}

export default BookLibrary;