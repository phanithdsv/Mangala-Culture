import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import GetInvolved from './components/GetInvolved';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="welcome"><Welcome /></section>
      <section id="about"><About /></section>
      <section id="get-involved"><GetInvolved /></section>
      <section id="blog"><Blog /></section>
      <section id="contact-us"><ContactUs /></section>
    </div>
  );
}

export default App;
