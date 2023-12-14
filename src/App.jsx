import './App.css'
import TopBanner from './components/TopBanner/TopBanner';
import DesktopNavbar from './components/Navbar/DesktopNavbar';
import Slider from './pages/slider/Slider';

const App = () => {
  return (
    <>
      <div className="main-canvas">
        <header>
          <TopBanner />
          <DesktopNavbar />
        </header>
        
        <Slider/>
      </div>
    </>
  )
}

export default App
