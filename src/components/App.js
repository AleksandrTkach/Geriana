import React from 'react';
import '../scss/App.scss';

import TopBanner from 'components/top-banner/TopBanner';
import Search from 'components/search/Search';
import Specialists from 'components/specialists/Specialists';
import HowItWorks from 'components/how-it-works/HowItWorks';
import Recalls from 'components/recalls/Recalls';
import OurPreferences from 'components/our-preferences/OurPreferences';
import CallUs from 'components/call-us/CallUs';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <TopBanner />
      <Search />
      <Specialists />
      <HowItWorks />
      <Recalls />
      <OurPreferences />
      <CallUs />
      <Footer />
    </div>
  );
}

export default App;
