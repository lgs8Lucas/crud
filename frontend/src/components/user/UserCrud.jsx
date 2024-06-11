import React, {Component} from "react";
import Main from '../template/Main'
import axios from 'axios'
import {baseUrl} from '../../main/variables'

const initialState = {
    user: {name: '', email: ''},
    list: []
}


const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitles: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    state = { ...initialState }

    clear(){ //Limpa o formulário
        this.setState({user: initialState.user})
    }

    save(){//Update and Create
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? baseUrl+'/'+user.id: baseUrl;
        axios[method](url, user)
            .then(resp =>{
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initialState.user, list})

            })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user);
        return list;
    }


    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}