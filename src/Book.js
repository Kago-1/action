import React from 'react'

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
            <h1 onClick={() => alert(title)}>{title}</h1>
            <h2 onMouseOver={() => alert(author)}>{author}</h2>
            {/* <p>{children}</p> */}
            <button type='button' onClick={clickHandler}>Ref</button>
        </article>
    );
};

export default Book
