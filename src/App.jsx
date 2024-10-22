import Header from './HeaderView';
import RestaurantInfo from './RestaurantInfoView';
import Condition from './ConditionView';
import SwiperSection from './SwiperView';
import Footer from './FooterView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimeChosen from './TimeChosenView';
import ScrollToTop from './ScrollToTopView';

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
