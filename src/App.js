import './App.css';
import AboutBarPage from './components/AboutBarPage/AboutBarPage';
import ContactPage from './components/ContactPage';
import EventPage from './components/EventPage';
import Footer from './components/Footer/Footer';
import GeneralPage from './components/GeneralPage';
import Header from './components/Header';
import MenuPage from './components/MenuPage';


function App() {
  return (
    <div className="App">
    <Header />
    <GeneralPage />
    <AboutBarPage />
    <MenuPage />
    <EventPage />
    <ContactPage />
    <Footer />
        <div className="montserrat">
        КУХНЯ РАБОТАЕТ: ПН-СБ
    </div>
    <div className="Narrow">
    о баре
    </div>
    <div className="montaga">
    Working Hourse
    </div>
    <div className="Beau">
    01
    </div>
    </div>
  );
}

export default App;
