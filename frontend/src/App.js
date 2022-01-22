import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from './Views/sidebar/sidebar'

import logo from './logo.svg';
import './App.css';
import BugList from './components/BugList';
import BugEdit from './components/BugEdit';

function App() {
  // const {auth}=useSelector(state=>state)
  return (

    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        {/* <Route path="/" element={<BugList/>}/> */}
        <Route path="/BugList" element={<BugList/>}/>
        <Route path="/BugList/BugEdit" element={<BugEdit/>}/>
        <Route path="/BugEdit/:id" element={<BugEdit/>}/>

      </Routes>
      </BrowserRouter>

    </div>


    // <Router>
    // {!auth.LoggedIn ? <Login/>:
    // <>
    //    <Sidebar/>
    // </>
    // }
    // </Router>

  );
}

export default App;
