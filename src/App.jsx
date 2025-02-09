

import './App.css'
import HeroSection from './Components/HeroSection';
import NavBar from './Components/NavBar'
import Services from './Components/Services';

function App() {
  

  return (
    <>
      <div className="bg-[#151515]">
        <div className="container mx-auto px-5 ">
          <NavBar></NavBar>
          <HeroSection></HeroSection>
        </div>
      </div>

      <div>
        <Services></Services>
      </div>
    </>
  );
}

export default App
