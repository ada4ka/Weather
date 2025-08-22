
import Weather from './components/weather/Weather';
import Pixabay from './components/pixabay/Pixabay';
import Nav from './components/nav/Nav';
import News from './components/news/News';
import Footer from './components/footer/Footer';
import UseNews from './components/news/ UseNews';
import UsePixabay from './components/pixabay/UsePixabay';
import UseWeather from './components/weather/UseWeather';
import Header from './components/header/Header';


function App() {
  return (
<div>
   <Nav/>
   <Header/>
  <News/>
  <Pixabay/>
  <Weather/>
   <Footer/>
   <UseNews/>
   <UsePixabay/>
   <UseWeather/>

</div>
  );
}

export default App;
