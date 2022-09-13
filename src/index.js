import React from 'react'; 
import ReactDOM from 'react-dom';

// JSX Rules
// return single element
// div/ section/ article or Fragment(React.Fragment)
// use camelCase for HTML attribute
// use className instead of class
// close every element
// formatting

function BookList() {
    return (
        <section>         
            <Book />
            <Book />
            <Book />
             <Book />
        </section>
    );
}
const Book = () => {
    return (
        <article>
            <Image></Image>
            <Title></Title>
            <Author></Author>
        </article>
    );
};
const Image = () => (
    <img src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/516XEz3XX4L._AC_SX184_.jpg" alt="" />
);

const Title = () => <h1>Where the Crawdads sing</h1>
const Author = () => <h2>Delia Owens</h2>


// const Person = () => <h1>Steve Jad</h1>
// const Message = () => {
//     return <p>CEO Africa Data Cables</p>
// };

ReactDOM.render(<BookList/>,document.getElementById('root'));