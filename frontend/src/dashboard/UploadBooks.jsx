import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBooks = () => {
  const bookCategories=[
    "Bilim-Kurgu",
    "Biyografi",
    "Anı",
    "Müzik",
    "Suç",
    "Kurgu",
    "Felsefe",
    "Şiir",
    "Roman",
    "Tarih",
    "Psikoloji",
    "çocuk kitabı",
    "Kişisel Gelişim"
  ]
  const [selectedCategory, setSelectedCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue= (event) =>{
    console.log("category selected: ", event.target.value);
    setSelectedCategory(event.target.value)};


  //handle book submit
 const handleBookSubmit= (event)=>{
      event.preventDefault();
      const form = event.target;

      const bookTitle=form.bookTitle.value;
      const authorName=form.authorName.value;
      const imageURL=form.imageURL.value;
      const category=selectedCategory;
      const bookDescription=form.bookDescription.value;
      const bookPdfUrl=form.bookPdfUrl.value;

      const bookObj={
         bookTitle , authorName ,imageURL , category , bookDescription ,bookPdfUrl
      }
      //console.log(bookObj);
      //send data to db
      fetch("http://localhost:5000/upload-book",{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(bookObj)
      }).then(res=>res.json()).then(data=>{
        //console.log(data)
        alert("Kitap Başarıyla Eklendi...")
        form.reset();
      })

 };
  return (
    <div className=' px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Kitap Yükle</h2>
      <form  onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>
        <div className="lg:w-1/2">
          <div className='mb-2 block'>
            <Label 
            htmlFor="bookTitle" 
            value="Kitap Adı" 
            />
          </div>
          <TextInput id="bookTitle" 
          name="bookTitle" 
          placeholder="Kitap Adı" 
          required type= "text"
          />
          
        </div>
        <div className="lg:w-1/2">
          <div className='mb-2 block'>
            <Label 
            htmlFor="authorName" 
            value="Yazar Adı" 
            />
          </div>
          <TextInput id="authorName" 
          name="authorName" 
          placeholder="Yazar Adı" 
          required type= "text"
          />
          
        </div>
      </div>
      {/* second row */}
      <div className='flex gap-8'>
        <div className="lg:w-1/2">
          <div className='mb-2 block'>
            <Label 
            htmlFor="imageURL" 
            value="Kitap Resmi " 
            />
          </div>
          <TextInput 
          id="imageURL" 
          name="imageURL" 
          placeholder="Kitap Resmi URL" 
          required type= "text"
          />
          
        </div>
        <div className="lg:w-1/2">
          <div className='mb-2 block'>
            <Label 
            htmlFor="inputState" 
            value="Kitap Katagori" 
            />
          </div>
         <select name='categoryName' id='inputState' className='w-full rounded' value={selectedCategory}
         onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((item) => <option key={item} >{item}</option>)
          }

         </select>
          
        </div>
      </div>
       {/* third row */}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Kitap Açıklaması" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Kendinize ait kitap açıklamasını yazınız..." className='w-full' 
        required rows={5} />
      </div>
       {/* 4nd row */}
      
       <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Kitap PDF" />
        </div>
        <TextInput id="bookPdfUrl" type="bookPdfUrl" placeholder="Kitap PDF URL" required />
      </div>
      <Button type="submit" className='mt-5'>KİTAP EKLE</Button>
    </form>
    </div>
  )
}

export default UploadBooks
