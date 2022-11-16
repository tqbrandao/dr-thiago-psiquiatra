import { Link } from "gatsby"
import React from "react"

export default function Header() {
  return (
    <nav>
      <h1>Dr. Thiago</h1>
      <div className="links">
        <Link to="/">Página Inicial</Link>
        <Link to="/blog">Blog</Link>
        <a
          href="https://www.doctoralia.com.br/thiago-queiroz-brandao/psiquiatra/sao-jose-do-rio-preto?utm_source=widget&utm_medium=link"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Agendar Consulta
        </a>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  )
}
