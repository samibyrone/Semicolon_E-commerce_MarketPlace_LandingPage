import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Layout, Home} from "./router";
import { Footer } from './components/Footer';
// import { Navbar } from './components/Layout/Navbar';
import { Header } from './components/Header';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
        path='/'
        element = {
          <Layout>
            <Header />
            <Home />
            {/* <Navbar /> */}
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