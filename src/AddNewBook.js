import './singUp.css';
import { useState } from 'react';
import axios from 'axios';


function AddBook() {

    const [bookData, setBookData] = useState({

        book_name: "",
        author_name: "",
        unique_id: null,
        category: "",
        price: null,
        book_cover: "",
        book_description: ""

    });

    const handalAddBook = (event) => {
        event.preventDefault();
        console.log(`bookData ${JSON.stringify(bookData)}`);
        const bookRequestData = {
            book_name: bookData.book_name,
            author_name: bookData.author_name,
            unique_id: bookData.unique_id,
            category: bookData.category,
            price: bookData.price,
            book_cover: bookData.book_cover,
            book_description: bookData.book_description
        };
        console.log(`bookReq ${JSON.stringify(bookRequestData)}`);
        const reqData = {
            "book_name": "The Clothing of Books",
    "author_name": "Jhumpa Lahiri",
    "unique_id": 18,
    "category": "Horror",
    "price": 250,
    "book_cover": "https://m.media-amazon.com/images/I/81YSvAcdnpL._AC_UF1000,1000_QL80_.jpg",
    "book_description": "In this deeply personal reflection, Pulitzer Prize–winning author Jhumpa Lahiri explores the art of the book jacket from the perspectives of both reader and writer. Probing the complex relationships between text and image, author and designer, and art and commerce, Lahiri delves into the role of the uniform; explains what book jackets and design have come to mean to her; and how, sometimes, “the covers become a part of me.”"

        };
        axios.post("http://localhost:8080/addBook", bookData)
        .then((response) => {
            response.json();
            console.log(`Response Status ${response.status}`);
        
        })
        .catch((err) => console.log(`Error: ${err}`))
        
    }

    const handalChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        console.log(`name ${name} value ${value}`);
        setBookData({[name]:value
            // ...bookData, [event.target.name]: value
        //     book_name: "",
        // author_name: "",
        // unique_id: null,
        // category: "",
        // price: null,
        // book_cover: "",
        // book_description: ""

    });
        console.log(`Value ${value}`);
    }
    

    return (
        <div className="Fbackground">
            <div className="form-div">
                <div className="singup-text">Add New Book</div>
                <form onSubmit={handalAddBook}>
                    <input type="number" className="input-text" placeholder="Enter Book Id" name="unique_id" onChange={handalChange}></input>
                    <input type="text" className="input-text" placeholder="Enter Book Name" name="book_name" onChange={handalChange}></input>
                    <input type="text" className="input-text" placeholder="Enter Author Name" name="author_name" onChange={handalChange}></input>
                    <input type="text" className="input-text" placeholder="Enter Category" name="category" onChange={handalChange}></input>
                    <input type="number" className="input-text" placeholder="Enter Price" name="price" onChange={handalChange}></input>
                    <input type="text" className="input-text" placeholder="Enter Book Description" name="book_description" onChange={handalChange}></input>
                    <input type="text" className="input-text" placeholder="Enter Book Image Url" name="book_cover" onChange={handalChange}></input>

                    <button type="submit" className="sub-btn">Submit</button>
                </form>
            </div>
        </div>
    );

}
export default AddBook;