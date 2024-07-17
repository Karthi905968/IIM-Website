import React from 'react'
import Dashboard from '../components/Dashboard'
import Accreditation from '../components/Accredition'
import Messages from '../components/Messages'
import New from '../components/new'
import { Helmet } from 'react-helmet'
const About = () => {
  return (
    <div>
         <Helmet>
        <title>IIM | Trichy - About  </title>
        </Helmet>
     <New/>
     <Messages/>
     <Dashboard/>
     <Accreditation/>
    </div>
  )
}

export default About