import React from 'react';
import { Routes, Route } from 'react-router';
import DefaultLayout from '../layouts/DefaultLayout';
import Main from '../pages/main';
import Add from '../pages/add';

export default function DefaultRouter() {
  return (
    <div>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Main />} />
          <Route path='/add' element={<Add />} />
        </Route>
      </Routes>
    </div>
  );
}
