import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import CommunityPage from './components/CommunityPage';
import GetStartedPage from './components/GetStartedPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-[#333333] flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
