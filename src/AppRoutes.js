import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Index }from './pages/Index'
import {Home} from './pages/Home'
import {NotFound} from './pages/NotFound'
import {NavBar} from './components/NavBar'


export const AppRoutes = () => {
    return (
  <>
      <BrowserRouter>      
          <div>
            <NavBar/>
            <Routes>
                <Route exact path = '/' element = {<Index/>}/>
                <Route exact path = '/home' element = {<Home/>}/>
                <Route exact path = '*' element = {<NotFound/>}/>
                
            </Routes>
          </div>
       </BrowserRouter>
    </>
    )
}
