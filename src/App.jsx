import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from '../src/pages/Landing'
import Locator from '../src/pages/Locator'
import News from '../src/pages/News'
import Recycle from './pages/Recycle';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/locator" element={<Locator />} ></Route>
        <Route path="/news" element={<News />} ></Route>
        <Route path="/recycle" element={<Recycle />} ></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}
