import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './assets/fonts/fonts.scss';
import Promo from './components/Promo';
import Info from './components/Info';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Sale from './pages/salepage/Sale';
import NotReadyPage from './pages/NotReadyPage';
import Auth from './pages/auth/Auth';
import SneakersPage from './pages/SneakersPage';


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
      <Route path="/notReadyPage">
        <NotReadyPage />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/sneakers">
        <SneakersPage />
      </Route>
    </Switch>
  );
}

export default App;
