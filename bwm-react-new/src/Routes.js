import React from 'react';
import {Route, Routes} from 'react-router-dom';

import RentalHome from './pages/RentalHome';
import RentalDetail from './pages/RentalDetail';
import Login from './pages/Login';
import Register from './pages/Register';

    <div className="container bwm-container">
      <Routes>
        <Route exact path="/" element={<RentalHome />}/>
        <Route path="/rentals/:id" element={<RentalDetail />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
      </Routes>
    </div>

export default Routes;