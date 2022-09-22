import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Index} from './pages/Index'
import {Home} from './pages/Home'
import {NotFound} from './pages/NotFound'

export const AppRoutes = () => {
    return (
      <BrowserRouter>      
          <div>
            <Routes>
                <Route exact path = '/' element = {<Index/>}/>
                <Route path = '/home' element = {<Home/>}/>
                <Route path = '/notfound' element = {<NotFound/>}/>
            </Routes>
          </div>
       </BrowserRouter>
    )
}
