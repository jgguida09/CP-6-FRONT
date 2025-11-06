
import { Moon,Sun } from 'lucide-react'
export default function Header({darkMode,setDarkMode}){
  return(
    <header className="flex justify-between items-center p-4 shadow-md dark:bg-gray-900/70 fixed top-0 left-0 right-0 backdrop-blur">
      <h1 className="font-bold text-lg">João Guilherme Guida Damasceno</h1>
      <nav className="flex gap-4">
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
        <a href="https://github.com/jgguida09" target="_blank">Github</a>
        <button onClick={()=>setDarkMode(!darkMode)} className="p-2 rounded">
          {darkMode?<Sun/>:<Moon/>}
        </button>
      </nav>
    </header>
  )
}
