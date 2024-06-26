import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props =>{
    return <aside className="menu-area">
        {/*Refatorar criando um componente para os itens de navegação*/}
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>
}

export default Nav;