import React from 'react';
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import {Layout} from './components/Layout/Layout';
import {Home} from './screen/home/Home';
import { Footer } from './components/Layout/Footer';
import { Navbar } from './components/Layout/Navbar';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
        path='/'
        element = {
          <Layout>
            <Home />
            <Navbar />
            <Footer />
          </Layout>
        }
        />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;