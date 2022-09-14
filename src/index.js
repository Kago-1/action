import React from 'react'; 
import ReactDOM from 'react-dom';

//CSS
import './index.css'

// JSX Rules
// return single element
// div/ section/ article or Fragment(React.Fragment)
// use camelCase for HTML attribute
// use className instead of class
// close every element
// formatting

const books = [
{   id: 1,
    img : 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/516XEz3XX4L._AC_SX184_.jpg',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens'
},

{   id: 2,
    img : 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51ezzFTCUEL._AC_SX184_.jpg',
    title: 'Holding the Line',
    author: 'Geoffrey Berman'
},

{   id: 3,
    img : 'https://images-na.ssl-images-amazon.com/images/I/71j0FLAauxL._AC_UL210_SR195,210_.jpg',
    title: 'It Ends with Us',
    author: 'Colleen Hoover'
}



]



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
const Book = (props) => {
    const { img, title, author, children } = props; //then you input just the parameters
    //attribute, eventHandler
    //onClick, onouseOver
    const clickHandler = () => (
        alert('hello')
    );
    return (
        <article className='book'>
            <img src={img} alt=''/>
            <h1>{title}</h1>
            <h2>{author}</h2>
            {/* <p>{children}</p> */}
            <button type='button' onClick={clickHandler}>Ref</button>
        </article>
    );
};

// const Person = () => <h1>Steve Jad</h1>
// const Message = () => {
//     return <p>CEO Africa Data Cables</p>
// }; 

ReactDOM.render(<BookList/>,document.getElementById('root'));