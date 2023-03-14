import React from "react";
import { Route, Routes } from 'react-router-dom';
import './style/App.css';
import { Layout } from './components/layout';
import Signin from './components/signin';
import Home from "./components/homepage";
import CharactersDetails from './components/characters_details';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Signin />} />
          <Route path='/characters' element={<Home/>} />
          <Route path='/characters_details' element={<CharactersDetails />} />
        </Route>
      </Routes>



    </div>
  );
}
