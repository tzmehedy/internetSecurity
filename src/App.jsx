
import './App.css'
import Customer from './Components/Customer';
import Functions from './Components/Functions';
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'
import Services from './Components/Services';
import ToolsManagement from './Components/ToolsManagement';

function App() {
  return (
    <>
      <div className="bg-[#151515]">
        <div className="container mx-auto px-5 pb-2">
          <div className='pt-5'>
            <NavBar></NavBar>
          </div>
          <HeroSection></HeroSection>
        </div>
      </div>

      <div>
        <Services></Services>
      </div>

      <div>
        <Functions></Functions>
      </div>

      <div>
        <ToolsManagement></ToolsManagement>
      </div>
      <div>
        <Customer></Customer>
      </div>
    </>
  );
}

export default App
