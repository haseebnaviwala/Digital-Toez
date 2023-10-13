// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Middlepart1 from './components/middlepart1';
import Tipprocess from './components/tipprocess';
import Services from './components/services';
import Contactus from './components/contactus';
import Middlepart2 from './components/middlepart2';
import Navigationbar from './components/navigationbar';
import MainServices from './components/servicesmain';
import Privacypolicy from './components/privacy';

function App() {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Header></Header>
      <Middlepart1></Middlepart1>
      <Tipprocess></Tipprocess>
      <Services></Services>
      <Middlepart2></Middlepart2>
      <Contactus></Contactus>
      <Privacypolicy></Privacypolicy>
      <Footer></Footer>
    </div>
  );
}

export default App;
