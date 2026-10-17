
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Outlet />

      <Footer/>
    </div>
  );
}
