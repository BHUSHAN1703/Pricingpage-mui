import React from 'react'
import Appbar from './components/Appbar'
import Content from './components/Content';
import Footer from './components/Footer';
import Grid from './components/Grid';
 
 

const App = () => {
  return (
    <div>
      <Appbar/>
      <Content/>
      <Grid/>
      <Footer/>
    </div>
  )
}

export default App