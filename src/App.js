import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyle';
import {productData , productDataTwo,productDataTree} from './components/Products/data'
import Products from './components/Products'
import Feature from './components/Feature';
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
       <Feature/>
       <Products heading='Sweet treats for you ' data={productDataTwo}/>
       <Products heading='Sweet treats for you ' data={productDataTree}/>
       <Footer/>

    </Router>
  );
}

export default App;
