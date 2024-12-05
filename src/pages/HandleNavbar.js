import { useLocation } from "react-router";
import Artist_Navbar from "../components/artist_navbar/Artist_Navbar";
import Header from "../components/navbar/Navbar";

function Navbar (){
    const location = useLocation();
    if (location.pathname === '/artistdetails') {
        return <Artist_Navbar />;
      } else {
        return <Header />;
      }
}

export default Navbar