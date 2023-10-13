import React from 'react'
import LandingPage from '../LandingPage/LandingPage'
import RecommendCarousel from '../RecommendCarousel/RecommendCarousel'
import AllToday from '../AllToday/AllToday'
import Explore from '../Explore/Explore'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>

<LandingPage />
<RecommendCarousel />
<AllToday />
<Explore />
<Footer  />

    </div>
  )
}

export default Home