import React from 'react'; 
import ReactDOM from 'react-dom';

//CSS
import './index.css'

import { books } from './books';
import Book from './Book';

// JSX Rules
// return single element
// div/ section/ article or Fragment(React.Fragment)
// use camelCase for HTML attribute
// use className instead of class
// close every element
// formatting

function BookList() {
    return (
        <section className='booklist'>         
            {books.map((book) => {
                //const {img, title, author}= book;
                return <Book key = {book.id} {...book}></Book>;
            })}
        </section>
    );
}


// const Person = () => <h1>Steve Jad</h1>
// const Message = () => {
//     return <p>CEO Africa Data Cables</p>
// }; s

ReactDOM.render(<BookList/>,document.getElementById('root'));