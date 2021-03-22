import React from 'react';
import HomeSlider from './components/HomeSlider';
import MainNav from './components/MainNav';
import TopNav from './components/TopNav';
import FeatureSection from './containers/FeatureSection';
import Projects from './containers/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopNav />
      <MainNav />
      <HomeSlider />
      <FeatureSection />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
