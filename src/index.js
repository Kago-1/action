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

// setup variables
const Title = 'Where the Crawdads sing'; 
const Author = 'Delia Owens';
const Image = 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/516XEz3XX4L._AC_SX184_.jpg';

function BookList() {
    return (
        <section className='booklist'>         
            <Book job= 'developer'/>
            <Book />
            <Book />
            <Book />
        </section>
    );
}
const Book = (props) => {
    return (
        <article className='book'>
            <img src={Image}/>
            <h1>{Title.toUpperCase()}</h1>
            <h2>{Author}</h2>
            <p>{props.job}</p>
        </article>
    );
};

// const Person = () => <h1>Steve Jad</h1>
// const Message = () => {
//     return <p>CEO Africa Data Cables</p>
// }; 

ReactDOM.render(<BookList/>,document.getElementById('root'));