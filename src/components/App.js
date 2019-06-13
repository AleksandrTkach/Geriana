import React from 'react';

import TopBanner from "components/screens/TopBanner";
import Search from "components/lines/Search";
import Specialists from "components/screens/Specialists";
import HowItWorks from "components/screens/HowItWorks";
import Recalls from "components/screens/Recalls";
import OurPreferences from "components/screens/OurPreferences";
import CallUs from "components/lines/CallUs";
import Footer from "components/layout/Footer";

function App() {
  return (
    <>
        <TopBanner/>
        <Search/>
        <Specialists/>
        <HowItWorks/>
        <Recalls/>
        <OurPreferences/>
        <CallUs/>
        <Footer/>
    </>
  );
}

export default App;
