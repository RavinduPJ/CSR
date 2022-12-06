import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Adminpanel from './components/adminpanel';
import Leftitems from './components/leftitems';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <h1>CSR Admin Panal</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Adminpanel/>}/>
          <Route path='/next' element={< Leftitems/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
