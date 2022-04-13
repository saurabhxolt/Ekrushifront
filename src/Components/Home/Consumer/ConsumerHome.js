import React, { useEffect } from "react";
import Carausol from "../Carosol/Carausol";
import Cards from "../Cards";
import Footer from "../Footer";
import ConsumerNavbar from "./ConsumerNavbar";
export default function ConsumerHome() {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "CONSUMER"
    ) {
      window.location.href = "/login";
    }
  }, []);
  sessionStorage.getItem("role");
  let v = sessionStorage.getItem("email");

  return (
    <div>
      <ConsumerNavbar />
      <Carausol></Carausol>
      <Cards></Cards>
      <Footer />
    </div>
  );
}
