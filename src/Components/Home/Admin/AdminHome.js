import Cards from "../Cards";
import Carausol from "../Carosol/Carausol";
import Footer from "../Footer";
import AdminNavbar from "./AdminNavbar";
import { useEffect } from "react";
export default function AdminHome() {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "ADMIN"
    ) {
      window.location.href = "/login";
    }
  }, []);
  let y = localStorage.getItem("email");
  return (
    <div>
      <AdminNavbar />

      <Carausol></Carausol>
      <Cards></Cards>
      <Footer />
    </div>
  );
}
