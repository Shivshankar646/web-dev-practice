import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/Bestseller'
import Ourpolicy from '../components/Ourpolicy'
import NewsLetterBox from '../components/NewsLetterBox'

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
     <BestSeller/>
     <Ourpolicy/>
     <NewsLetterBox/>
    </div>
  )
}

export default Home
