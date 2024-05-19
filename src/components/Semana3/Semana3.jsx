import React from 'react';
import Gallery from './Gallery';
import Profile2 from './Profile2';
import TodoList1 from './TodoList1';
import TodoList2 from './TodoList2';
import Profile3 from './Profile3';
import PackingList from './PackingList';
import List from './List';
import TeaSet from './TeaSet';
import { Link } from "react-router-dom";

export default function Semana3() {
    return (
        <div>
            <div className="card-header border border-info-subtle bg-secondary-subtle">
                <h1 style={{ color: '#fff' }}>Página de Exercícios semana 3</h1>
            </div>
            <Gallery />
            <Profile2 />
            <TodoList1 />
            <TodoList2 />
            <Profile3 />
            <PackingList />
            <List />
            <TeaSet />
            <Link to="/home" className="btn bg-secondary-subtle mt-5">Voltar</Link>
        </div>
    );
}
