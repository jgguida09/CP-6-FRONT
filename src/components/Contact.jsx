
export default function Contact(){
  return(
    <section id="contact" className="p-10">
      <h3 className="text-2xl font-bold mb-4">Contato</h3>
      <form className="grid gap-3 max-w-md">
        <input className="border p-2" type="text" placeholder="Nome" required />
        <input className="border p-2" type="email" placeholder="Email" required />
        <textarea className="border p-2" rows="3" placeholder="Mensagem" required />
        <button className="bg-blue-600 text-white p-2 rounded">Enviar</button>
      </form>
    </section>
  )
}
