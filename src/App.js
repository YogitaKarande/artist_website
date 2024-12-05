import 'bootstrap/dist/css/bootstrap.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookApointment from './components/book_appointment.js/Book';
import Footer from './components/footer/Footer';
import Rating_review from './components/rating_review/Rating_review';
import About from './pages/About';
import ArtistDetails from './pages/artist/Artist_Details';
import Artist_List from './pages/artist/Artist_List';
import Gallary from './pages/artist/Gallary';
import Contact from './pages/Contact';
import Navbar from './pages/HandleNavbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/global.css';
import './styles/pages.css';

function App() {
  return (
    <div className="App bg-dark text-white">
      <BrowserRouter>
        <Navbar />
        {/* <div className="min-vh-100"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="rating" element={<Rating_review />} />
          <Route path="artistdetails" element={<ArtistDetails />} />
          <Route path="bookapointment" element={<BookApointment />} />
          <Route path="artistlist" element={<Artist_List />} />
          <Route path="gallary" element={<Gallary />} />
        </Routes>
        {/* </div> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
