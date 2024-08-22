import {Fragment} from 'react';
import './assets/fonts/fonts.scss';
import Promo from './components/Promo';
import Info from './components/Info';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';


function App() {
  return (
    <Fragment>
      <Promo />
      <Info />
      <AboutUs />
      <Footer />
    </Fragment>
  );
}

export default App;
