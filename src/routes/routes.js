import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rating_review from '../components/rating_review/Rating_review';
import ArtistDetails from '../pages/artist/Artist_Details';

function NestedRoutes() {
  return (
    <div className="App bg-dark text-white">
      <BrowserRouter>
          <Routes>
            <Route path="rating" element={<Rating_review />} />
            <Route path="/artist/:id" element={<ArtistDetails />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NestedRoutes;
