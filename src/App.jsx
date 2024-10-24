import Header from './HeaderView';
import Footer from './FooterView';
import RestaurantInfo from './RestaurantInfoView';
import Condition from './ConditionView';
import SwiperSection from './SwiperView';
import TimeChosen from './TimeChosenView';
import LoginRegister from './LoginRegisterView';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTopView';

function App() {
  return (
    <BrowserRouter basename={'/POS/'}>
      <Header />
      <ScrollToTop></ScrollToTop>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <RestaurantInfo />
              <Condition />
              <SwiperSection />
            </>
          }
        />
        {/* TimeChosen Page */}
        <Route path="/TimeChosen" element={<TimeChosen />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
