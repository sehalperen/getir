import Header from './components/Header';
import Footer from './components/Footer';
import Campaigns from './components/Campaigns';
import Cards from './components/Cards';
import Categories from './components/Categories';
import HeroSection from './components/HeroSection';
import MobileApp from './components/MobileApp';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Categories/>
    <Campaigns/>
    <div className="container mx-auto">
      <Cards/>
      <Favorites/>
      <MobileApp/>
    </div>

    <Footer/>
    
    </>
    
  );
}

export default App;
