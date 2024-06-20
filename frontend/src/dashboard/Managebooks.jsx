import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from 'react-router-dom';

const Managebooks = () => {
  const [allBooks, setAllBooks]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data)=>{setAllBooks(data)})
  },[])

  //delete book from button
  const handleDelete=(id)=>{
    //console.log(id);
    fetch(`http://localhost:5000/book/${id}`,
    {method:"DELETE",}
  ).then((res)=>res.json()).then((data)=>{
      alert('Kitap Silindi...');
      setAllBooks(data)
      window.location.reload();
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Kitapları Yönet</h2>
      <Table hoverable className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Kitap Adı</Table.HeadCell>
          <Table.HeadCell>Yazar</Table.HeadCell>
          <Table.HeadCell>Katagori</Table.HeadCell>
          <Table.HeadCell>Fiyat</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        {
            allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>10.00₺</Table.Cell>
            <Table.Cell>
            <Button outline gradientDuoTone="cyanToBlue">
            <Link to={`/admin/dashboard/edit-books/${book._id}`}>Düzenle</Link>
                </Button>
            </Table.Cell>
            <Table.Cell>
            <Button onClick={()=>handleDelete(book._id)} outline gradientDuoTone="pinkToOrange">
               Sil
                </Button>
            </Table.Cell>
          </Table.Row>
            </Table.Body>)
          }
        <Table.Body className="divide-y">
          
          
       
        </Table.Body>
      </Table>
      
    </div>
  )
}

export default Managebooks
