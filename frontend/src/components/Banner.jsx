import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
      {/* Left side */}
      <div className='md:w-1/2 space-y-8 h-full'>
        <h2 className='text-6xl font-bold leading-snug text-black'>Okuduğun Kitabı Değiştir <span className='text-cyan-800'>Yenisini Al</span></h2>
        <p className='md:w-4/5'>Sürdürülebilir bir kitap okuma alışkanlığı kazanmak istiyorsan okuduğun kitabı yeni 
        okuyucusuyla paylaş ve zevkine uygun birbirinden farklı yüzlerce kitap içinden dilediğini alıp sen de hafızandaki kütüphaneyi genişlet. </p>
         <div>
          <input type="search" name="search" id="search" placeholder='Kitabını Ara' className='py-2
          px-2 rounded-s-sm outline-none' />
          <button className='bg-cyan-800 px-6 py-2 text-white font-medium hover:bg-black
          transition-all ease-in duration-200'>Ara</button>
         </div>
      </div>
      {/* Right side */}
      <div>
        <BannerCard></BannerCard>
      </div>
    </div>
    
  </div>
  )
}

export default Banner
