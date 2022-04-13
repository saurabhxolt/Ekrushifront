import React, { useEffect } from "react";
import Cards from "../Cards";
import Carausol from "../Carosol/Carausol";
import Footer from "../Footer";
import FarmernavBar from "./FarmerNavbar";

export default function FarmerHome() {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "FARMER"
    ) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <FarmernavBar></FarmernavBar>
      <Carausol />
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
}
