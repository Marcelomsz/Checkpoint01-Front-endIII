import React from 'react';
import '../styles/App.scss';
import Banner from '../components/Banner/banner.jsx';
import Header from '../components/Header/header.jsx';
import Footer from '../components/Footer/footer.jsx';
import Cards from '../components/Projetos/projeto.jsx';

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
