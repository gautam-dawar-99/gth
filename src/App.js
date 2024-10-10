import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';  // Import the About component
import Contact from './pages/Contact';  // Import the About component
import Product from './pages/Product';  // Import the About component
import Header from './header';
import CTOMessage from './pages/CTOMessage';

import IndustryPartnerships from './components/Industries_Collab'; // Import the new component
import LeadershipTeam from './components/LeadershipTeam'; // Import the new component
import SuccessStories from './components/SuccessStories'; // Import the new component

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />        {/* Route for Home page */}
        <Route path='/about' element={<About />} />  {/* Route for About page */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path="/cto-message" element={<CTOMessage />} />

        <Route path='/industry-collab' element={<IndustryPartnerships/>} />
        <Route path='/leadership' element={<LeadershipTeam/>} />
        <Route path='/success-stories' element={<SuccessStories/>} />
        
      </Routes>
    </>
  );
}

export default App;
