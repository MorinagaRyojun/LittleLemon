import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';

//ImportPages
import HomePage from './pages/HomePage';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './components/Bookings/ConfirmedBooking'
import pages from './utils/pages';


function App() {
  return (
    <div className='main'>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route path={pages.get('confirmedBooking').path} element={<ConfirmedBooking />} />
        </Routes>
      </Layout>
      
    </div>
  );
}

export default App;