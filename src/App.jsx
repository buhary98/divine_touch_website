import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Header from "./components/header/Header";
import PreLoader from "./components/preloader/PreLoader";
import Banner from "./components/banner/Banner";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Price from "./components/price/Price";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterDec from "./components/footer/FooterDec";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div>
      <PreLoader/>
      <Header />
      <Banner />
      <About />
      <Service />
      <Project />
      <Price />
      <Contact />
      <FooterDec />
      <Footer />
      <Chat phoneNumber="+85260606457" />
    </div>
  );
}

export default App;
