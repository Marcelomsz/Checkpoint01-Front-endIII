import React from 'react';
import '../styles/App.scss';
import Banner from '../components/Banner/banner';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Cards from '../components/Projetos/projeto';

function App() {
  return (
    <>
    <Header />
    <main>
      <Banner />
      <Cards/>
    </main>
    <Footer />
    </>
  );
}

export default App;
