import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`)
            .then(response => response.json())
            .then(data => setBookData(data))
            .catch(error => console.error('Error fetching book:', error));
    }, [id]);

    return (
        <div className='mt-28 px-4 lg:px-24'>
            {bookData ? (
                <>
                    <img src={bookData.imageURL} alt={bookData.bookTitle} className='h-96' />
                    <h2>{bookData.bookTitle}</h2>
                    <p>{bookData.authorName}</p>
                    
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SingleBook;
