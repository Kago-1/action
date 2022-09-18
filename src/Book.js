import React from 'react'

const Book = (props) => {
    const { img, title, author, review, children } = props; //then you input just the parameters
    //attribute, eventHandler
    //onClick, onMouseOver

    // const clickHandler = () => (
    //     alert('hello')
    // );
    return (
        <article className='book'>
            <img src={img} alt=''/>
            <h1 onClick={() => alert(title)}>{title}</h1>
            <h2>{author}</h2>
            {/* <p>{children}</p> */}
            {/* <button type='button' onClick={clickHandler}>Read</button> */}
            <a target="#" href={review}>Read</a>
           
        </article>
    );
};

export default Book
