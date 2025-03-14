import { useNavigate } from "react-router-dom"
// import { useState } from 'react'


function LogIn() {
  const navigate = useNavigate()
  

  return (
    <section className="bg-slate-50 w-xl px-12 py-16 shadow-[0_0_35px_rgba(0,0,0,0.15)] rounded-3xl">
      <div className="flex justify-center bg-gray-300 mb-6 p-10">Logotipo</div>
      <h1 className="text-center mb-14 tracking-wide text-2xl text-gray-600"></h1>
      <form action="#">
        <input className="w-full h-12 p-4" type="text" placeholder="Usuário" />
        <div className="w-full h-4 border-gray-400 border-l-2 border-b-2 -translate-y-3.5"></div>
        <input className="w-full h-12 p-4" type="password" placeholder="Senha" />
        <div className="w-full h-4 border-gray-400 border-l-2 border-b-2 -translate-y-3.5"></div>
        <div className="flex justify-between items-center text-gray-600">
          <div className="flex gap-2">
            <input type="checkbox" name="lembrar" id="lembrar" />
            <label htmlFor="lembrar">Lembrar de mim.</label>
          </div>
          <a href="">Esqueci minha senha.</a>
        </div>
      </form>
      <button 
        className="w-full h-12 mt-14 bg-emerald-400 hover:bg-emerald-500 text-white text-xl rounded-lg cursor-pointer"
        onClick={() => navigate("/listar")}
        >LOGIN
        </button>
    </section>
  )
}

export default LogIn
