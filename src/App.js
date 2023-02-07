import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeaturesPage from './pages/FeaturesPage';
import HomePages from './pages/HomePages';
import SigninPage from './pages/SigninPage';
import TeamsPages from './pages/TeamsPages';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages/>}/>
          <Route path="/features" element={<FeaturesPage/>}/>
          <Route path="/team" element={<TeamsPages/>}/>
          <Route path="/signin" element={<SigninPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App