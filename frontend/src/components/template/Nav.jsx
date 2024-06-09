import './Nav.css'
import React from 'react'

const Nav = props =>{
    return <aside className="menu-area">
        {/*Refatorar criando um componente para os itens de navegação*/}
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>
}

export default Nav;