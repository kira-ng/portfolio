import React, { useEffect, useState } from 'react'
import './App.scss'
import { client } from './client'

// containers
import { About, Footer, Header, Skills, Testimonial, Work } from './container'

// components
import { Navbar } from './components'

const App = () => {
  const [infos, setInfos] = useState([])

  useEffect(() => {
    const query = '*[_type == "infos"] | order(_createdAt desc)[0]'

    client.fetch(query).then((data) => {
      setInfos(data)
    })
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Header infos={infos} />
      <About infos={infos} />
      <Work infos={infos} />
      <Skills infos={infos} />
      <Testimonial infos={infos} />
      <Footer infos={infos} />
    </div>
  )
}

export default App
