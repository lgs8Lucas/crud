import React from "react";
import Main from "../template/Main";

const Home = props => {
    return <Main icon="home" title="Início" subtitle="Um crud simples">
        <h1 className="display-4">Bem Vindo!</h1>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React</p>
    </Main>
}

export default Home;