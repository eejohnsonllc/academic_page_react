import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Publications from './components/Publications';
import Visualizations from './components/Visualizations';
import Teaching from './components/Teaching';
import Consulting from './components/Consulting';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    // Load AOS asynchronously after component mounts
    const loadAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        await import('aos/dist/aos.css');
        AOS.init({
          once: true,
          duration: 800,
          easing: 'ease-in-out'
        });
      } catch (error) {
        console.warn('AOS failed to load:', error);
      }
    };

    // Load AOS after a short delay to not block initial render
    setTimeout(loadAOS, 100);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <Home />;
      case 2:
        return <Publications />;
      case 3:
        return <Visualizations />;
      case 4:
        return <Teaching />;
      case 5:
        return <Consulting />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;