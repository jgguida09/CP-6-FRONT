
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App(){
  const [darkMode,setDarkMode]=useState(false)
  return(
    <div className={darkMode?'dark':''}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Hero/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}
