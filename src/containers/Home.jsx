import React from 'react'
import New from '../components/new'
import VideoComponent from '../components/VideoComponent'
import Marquee from '../components/Marquee'
import News from '../components/News'
import Programs from '../components/Programs'
import Recruiters from '../components/Recruiters'
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <div>
        <Helmet>
        <title>IIM | Trichy - Home Official </title>
        </Helmet>
      <New/>
      <VideoComponent/>
      <Marquee/>
      <News/>
      <Programs/>
      <Recruiters/>
    </div>
  )
}

export default Home