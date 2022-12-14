import * as React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Games from './pages/Games/Games'
import Planning from './pages/Planning/Planning'


export default function Blog() {    
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Games />} />
          <Route path="planning" element={<Planning />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}