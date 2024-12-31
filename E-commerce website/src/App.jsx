import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Layout} from './components/Layout/Layout';
import {Home} from './screen/home/Home';
import { Footer } from './components/Layout/Footer';
// import { Navbar } from './components/Layout/Navbar';
import { Header } from './components/Layout/Header';


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