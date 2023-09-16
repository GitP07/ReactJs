import './AllBooksDisplay.css';
import { useEffect, useState } from 'react';
import axios from 'axios';



function DisplayBooks() {

    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        axios("http://localhost:8080")
            .then((response) => {
                setBooksList(response.data);
                console.log(`Response Data: ${JSON.stringify(response.data)}`);
                console.log(`Data: ${booksList[0]}`);

            })
            .catch((error) => console.log(`Error: ${error}`))
    }, [])

    return (
        <div className='backg'>
            {
                booksList.map((book) => (
                    <div className='container'>
                        <div className='img-container'>

                        </div>
                        <div className='info-container'>
                            <p className='title'>{book.book_name}</p>
                            <div className='inner-info'>
                                <div className='author-info'>
                                    <p>{`Author: ${book.author_name}`}</p>
                                    <p>{`Category: ${book.category}`}</p>
                                </div>
                                <div className='price-info'>
                                    <p>{`RS: ${book.price}`}</p>
                                    <input type='button' className='button-btn' value={`Buy Now`}></input>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayBooks;