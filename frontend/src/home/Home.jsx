import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './FavoriteBooks'
import FavBook from './FavBook'
import Review from './Review'


const Home = () => {
  return (
    <div>
      <Banner/>
      <FavoriteBooks/>
      <FavBook/>
      <Review/>
    </div>
  )
}

export default Home
