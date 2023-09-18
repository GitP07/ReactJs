import "./MyBooksList.css"
import bookImg from "./images/profile.jpg"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function BooksLists() {
    const navigate = useNavigate();

    const [booksDetails, setBooksDetails] = useState([]);

    useEffect(() => {
        axios("http://localhost:8080")
            .then((response) => {
                setBooksDetails(response.data);
                console.log(`Response Data: ${JSON.stringify(response.data)}`);
                console.log(`Data: ${booksDetails[0]}`);


            })
            .catch((error) => console.log(`Error: ${error}`))
    }, [])


    return (
        <div className="backg">
            <div className="main-screen">
                {
                    booksDetails.map((book) => (
                        <div onClick={() => navigate(`/bookDetail/${book.unique_id}`)}>
                            <div className="line-cont"></div>
                            <div className="book-cont">
                                <div className="book-img">
                                    <img src={book.book_cover ? book.book_cover : bookImg} alt="book"></img>
                                </div>
                                <div className="bookInner-cont">
                                    <div className="book-detail">
                                        <div className="title-cont">
                                            <p>{book.book_name}</p>
                                        </div>
                                        <div className="info-cont">
                                            <p>{`Category: ${book.category}`}</p>
                                            <p>{`Author: ${book.author_name}`}</p>
                                        </div>

                                    </div>
                                    <div className="price-cont">
                                        <p>{`RS: ${book.price}`}</p>
                                        <input type="submit" className="sub-btn"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default BooksLists;