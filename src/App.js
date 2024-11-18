import { Suspense } from 'react';

import { useAxios } from './hooks/useAxios';

import { getAnimals } from './api/index.ts';

import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import SearchSection from './components/searchSection/SearchSection';
import AboutSection from './components/aboutSection/AboutSection';
import OurAnimals from './components/ourAnimals/OurAnimals';
import HelpSection from './components/helpSection/HelpSection';
import DonateSection from './components/donateSection/DonateSection';
import Footer from './components/footer/Footer';

import './index.scss';

function App() {
  const { data, error, loaded } = useAxios(getAnimals(), 'GET');

  console.log(data, error, loaded);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SearchSection />
      <AboutSection />
      <OurAnimals />
      <HelpSection />
      <DonateSection />
      <Footer />
    </div>
  );
}

export default function wrapperedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
