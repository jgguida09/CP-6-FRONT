
const list=[
  {id:1,name:'Projeto Flexbox',link:'https://github.com/jgguida09/cp2-front'},
  {id:2,name:'Projeto Grid',link:'https://github.com/jgguida09/checkpoint-4-webdev-ESPZ'},
  {id:3,name:'Projeto Responsivo',link:'https://github.com/jgguida09/cp2-front'}]
import { useState } from 'react'
export default function Projects(){
  const [text,setText]=useState('')
  const filter=list.filter(p=>p.name.toLowerCase().includes(text.toLowerCase()))
  return(
    <section id="projects" className="p-10 mt-6">
      <h3 className="text-2xl font-bold mb-4">Projetos</h3>
      <input onChange={e=>setText(e.target.value)} className="border p-2 mb-6 w-full max-w-md" placeholder="Buscar"/>
      <div className="grid md:grid-cols-3 gap-4">
        {filter.map(p=>(
          <a href={p.link} target="_blank" key={p.id} className="border p-4 rounded cursor-pointer hover:scale-105 transition block">
            {p.name}
          </a>
        ))}
      </div>
    </section>
  )
}
