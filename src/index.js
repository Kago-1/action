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
    {
    img : 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/516XEz3XX4L._AC_SX184_.jpg',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens'
},

{
    img : 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51ezzFTCUEL._AC_SX184_.jpg',
    title: 'Holding the Line',
    author: 'Geoffrey Berman'
},

{
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
                return <Book book={book}></Book>;
            })}
        </section>
    );
}
const Book = (props) => {
    const { img, title, author, children } = props.book; //then you input just the parameters
    return (
        <article className='book'>
            <img src={img} alt=''/>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <p>{children}</p>
        </article>
    );
};

// const Person = () => <h1>Steve Jad</h1>
// const Message = () => {
//     return <p>CEO Africa Data Cables</p>
// }; 

ReactDOM.render(<BookList/>,document.getElementById('root'));