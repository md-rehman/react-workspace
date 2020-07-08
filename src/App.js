import React, { useContext } from 'react';
import './App.scss';
import Viewer from './components/viewer/Viewer';
import Header from './components/global/header/Header';
import NavMain from './components/global/nav/NavMain';
import Footer from './components/global/footer/Footer';
import { AppContext } from './store/context/AppContext';
import NavSub from './components/global/nav/NavSub';

function App() {
  const { state } = useContext(AppContext);


  const mainTemplate = () => <div className="app">
    <div className="NavMain-wrapper">
      <NavMain />
    </div>
    <div className="main-wrapper">
      <div className="NavSub-wrapper">
        <NavSub />
      </div>
      <main>
        <Header />
        <Viewer />
      </main>
    </div>
    {/* <div className="Footer-wrapper">
      <Footer />
    </div> */}
  </div>

  return (
    mainTemplate()
  );
}

export default App;
