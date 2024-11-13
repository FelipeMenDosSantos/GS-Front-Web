import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Nav.css"
import icone from "../assets/icone.png"
export const Nav = () => {
  return (
    <section className='nav'>
        <div className='logo'>
            <img src={icone} alt="Logo" />
            <h3>MeuConsumo</h3>
        </div>

        <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/Solução"}>Solução</Link>
            <Link to={"/Cadastrar"}>Cadastrar</Link>
            <Link to={"/Login"}>Login</Link>
            <Link to={"/Sobre"}>Sobre</Link>
        </div>
    </section>
  )
}
