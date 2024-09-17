import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import BlogPost from './BlogPost';

export default function RouteComponent(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/post/:id' element={<BlogPost/>}/>
            </Routes>
        </Router>
    )
}