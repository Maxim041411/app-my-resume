import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Download from './components/Download/Download';
import Greetings from './components/Greetings/Greetings';


const App = () => {
  
  return  (
    <BrowserRouter>
      <div className='app-wrapper'>
         <Header />
         <Navbar />
         <div class='app-wrapper-content'>
        <Routes>
         <Route path='/' element={<Greetings />} />
         <Route path='/profile' element={<Profile />}/>
         <Route path='/education' element={<Education />}/>
         <Route path='/experience' element={<Experience />}/>
         <Route path='/skills' element={<Skills/>}/>
         <Route path='/download' element={<Download/>}/>
         </Routes>
         </div>
         </div>
         </BrowserRouter>        
 )   
}

export default App;
