import React from 'react'
import FavBookImg from "../assets/favbook.jpeg"
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
        </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Favori Kitabını <span className='text-cyan-700'>Kolayca Bul
            </span></h2>
            <p className='mb-10 text-lg md:w-5/6'>
            Kitap okuma tarzına göre binlerce kitap seni bekliyor.
             Aradığın kitabı yüzlerce katagori arasından kolayca bul.</p>
            {/*tanıtım */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>1000+</h3>
                    <p className='text-base'>Kitap Çeşidi</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>500+</h3>
                    <p className='text-base'>Kayıtlı Kullanıcı</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>100+</h3>
                    <p className='text-base'>Yüzlerce Katagori</p>
                </div>
            </div>

            <Link to="/shop" className='mt-12 block'><button className='bg-cyan-700 text-white font-semibold px-5 py-2 rounded
             hover:bg-orange-500 transition-all duration-300'>Daha Fazlası</button></Link>

            </div>
            
    </div>
  )
}

export default FavBook
