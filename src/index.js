import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Exercicio1 from './components/Semana1/Exercicio1';
import Exercicio2 from './components/Semana1/Exercicio2';
import Exercicio3 from './components/Semana2/Exercicio3';
import Semana3 from './components/Semana3/Semana3';
import Semana4 from './components/Semana4/Semana4';
import BucketList from './components/Semana4/BucketList';
import Counter from './components/Semana4/Counter';
import CounterList from './components/Semana4/CounterList';
import Form from './components/Semana4/Form';
import Form2 from './components/Semana4/Form2';
import Form3 from './components/Semana4/Form3';
import Gallery from './components/Semana4/Gallery';
import List from './components/Semana4/List';
import List2 from './components/Semana4/List2';
import List3 from './components/Semana4/List3';
import List4 from './components/Semana4/List4';
import MovingDot from './components/Semana4/MovingDot';
import ShapeEditor from './components/Semana4/ShapeEditor';
import Toolbar from './components/Semana4/Toolbar';
import Semana5 from './components/Semana5/Semana5';
import Form1 from './components/Semana5/Form1'; // City Quiz
import Form2Semana5 from './components/Semana5/Form2'; // Check-in
import Accordion from './components/Semana5/Accordion';
import Messenger from './components/Semana5/Messenger';

const router = (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/exercicio1" element={<Exercicio1 />} />
        <Route path="/exercicio2" element={<Exercicio2 />} />
        <Route path="/exercicio3" element={<Exercicio3 />} />
        <Route path="/Semana3" element={<Semana3 />} />
        <Route path="/Semana4" element={<Semana4 />} />
        <Route path="/semana4/bucketlist" element={<BucketList />} />
        <Route path="/semana4/counter" element={<Counter />} />
        <Route path="/semana4/counterlist" element={<CounterList />} />
        <Route path="/semana4/form" element={<Form />} />
        <Route path="/semana4/form2" element={<Form2 />} />
        <Route path="/semana4/form3" element={<Form3 />} />
        <Route path="/semana4/gallery" element={<Gallery />} />
        <Route path="/semana4/list" element={<List />} />
        <Route path="/semana4/list2" element={<List2 />} />
        <Route path="/semana4/list3" element={<List3 />} />
        <Route path="/semana4/list4" element={<List4 />} />
        <Route path="/semana4/movingdot" element={<MovingDot />} />
        <Route path="/semana4/shapeeditor" element={<ShapeEditor />} />
        <Route path="/semana4/toolbar" element={<Toolbar />} />
        <Route path="/Semana5" element={<Semana5 />} />
        <Route path="/semana5/form1" element={<Form1 />} />
        <Route path="/semana5/form2" element={<Form2Semana5 />} />
        <Route path="/semana5/accordion" element={<Accordion />} />
        <Route path="/semana5/messenger" element={<Messenger />} />
    </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>{router}</BrowserRouter>
    </React.StrictMode>
);
