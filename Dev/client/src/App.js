import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom'

import BookingForm from './components/bookingForm';
import Listview from './components/listview';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <h1>CSR</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookingForm/>} />
          <Route path='/next' element={<Listview/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
