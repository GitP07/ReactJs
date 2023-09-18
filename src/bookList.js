import { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
     const [bookList, setBookList] = useState([]);
    // let bookList = [];

     useEffect(() => {
         axios.get("http://localhost:8080")
            .then(async response => {
                // bookList = response.data;
                await setBookList(response.data)
                console.log(`Server Response ${JSON.stringify(bookList)}`)
                if(bookList.length > 0 )
                {
                    console.log("Books Available");
                }
                else{
                    console.log("Books are not available");
                }
            })
            .catch((err) => console.log(`Error ${err}`))
    }, [])

    return (
        <div>
            BookList
            <ul>
                {
                    bookList.map(book => (
                        <li>{book.author_name}</li>
                    )
                    )
                }
            </ul>
        </div>
    );

}

export default BookList;