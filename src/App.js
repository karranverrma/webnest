import './App.css';
import Navbar from './components/Navbar';
import CTASection from './components/CTASection';
import Hero from './components/Hero';
import Features from './components/Features';
import Templates from './components/Templates';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <CTASection />
      <Hero />
      <Features />
      <Templates />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
