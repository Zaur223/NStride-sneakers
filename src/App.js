import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './assets/fonts/fonts.scss';
import Promo from './components/Promo';
import Info from './components/Info';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Sale from './pages/salepage/Sale';


function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Promo />
        <Info />
        <AboutUs />
        <Footer />
      </Route>
      <Route path="/sale">
        <Sale />
      </Route>
    </Switch>
  );
}

export default App;
