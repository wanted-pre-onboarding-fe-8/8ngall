import React from 'react';
import { Routes, Route } from 'react-router';
import DefaultLayout from '../layouts/DefaultLayout';
import Main from '../pages/main';
import AddClass from '../pages/addClass';

export default function DefaultRouter() {
  return (
    <div>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Main />} />
          <Route path='/add' element={<AddClass />} />
        </Route>
      </Routes>
    </div>
  );
}
