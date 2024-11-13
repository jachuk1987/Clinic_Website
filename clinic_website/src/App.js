import './App.css';

import Topsection from './Components/Topsection';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services';
import Future from './Components/Future';
import Team from './Components/Team';
import Appointment from './Components/Appointment';
import Testsection from './Components/Testsection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Topsection />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Future />
      <Team />
      <Appointment />
      <About/>
      <Testsection />
      <Footer />
    </div>
  );
}

export default App;
