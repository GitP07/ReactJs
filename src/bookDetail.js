import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bookImg from "./images/profile.jpg";
import "./bookDetail.css";
import backIcon from "./images/backIcon.png";
import saveIcon from "./images/saveIcon.png";
import deleteIcon from "./images/deleteIcon.png";

function BookDetail() {
    const params = useParams();
    const bookId = params.id
    const [bookInfo, setBookInfo] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        axios("http://localhost:8080/getBookById/" + bookId)
            .then((response) => setBookInfo(response.data))
            .catch((error) => console.log(`Error: ${error}`))
    })

//Delition of book by its id

    const handalDeleteBook = () =>{
        const deleteBookId = {
            "unique_id": +bookId 
        }
        console.log(`deleteBook ${JSON.stringify(deleteBookId)}`);
        console.log(`bookId ${bookId}`);
        
        axios.post("http://localhost:8080/deleteBook", deleteBookId)
        .then((response) => {
            // response.json()
            console.log(`Response Status ${response.status}`);
            console.log(`book Deleted ${bookId}`);
            navigate(-1);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        })
        
    }

    return (
        <div className="backg-cont">
            <div className="main-screen-cont">
                <div className="top-cont">
                    <div className="back-btn" onClick={() => navigate(-1)}>
                        <img src={backIcon} alt="back-Icon"></img>
                    </div>
                    <div className="save-delete-cont">
                    <div className="save-btn">
                        <img src={saveIcon} alt="save-Icon"></img>
                    </div>
                    <div className="delete-btn" onClick={handalDeleteBook}>
                    <img src={deleteIcon} alt="delete-Icon"></img>
                    </div>
                    </div>
                    
                </div>
                <div className="book-container">
                    <div className="img-cont">
                        <img src={bookInfo.book_cover ? bookInfo.book_cover : bookImg} alt="book-cover"></img>
                    </div>
                    <div className="book-detail-cont">
                        <p className="book-name">{bookInfo.book_name}</p>
                        <p className="author-name">{bookInfo.author_name}</p>
                    </div>
                    <div className="descr-cont">
                        <p>Description:</p>
                        <p>{bookInfo.book_description ? bookInfo.book_description : `No Description Available`}</p>
                    </div>
                </div>
                <div className="buy-btn">
                    <p>Buy now</p>
                    <div className="empty-space"></div>
                    <p>{`RS: ${bookInfo.price}`}</p>
                </div>
            </div>

        </div>
    )
}

export default BookDetail;