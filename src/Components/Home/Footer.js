import React from "react";
//import "../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                E-KrushiSeva
              </h5>
              <p>
                We collect Plastic and E-waste from various societies and nearby
                localities.We are currently working only in four cities for now
                i.e Mumbai,Hyderabad,Pune and Banglore
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Products
              </h5>
              <p>
                <a style={{ textDecoration: 'none', color: 'white' }} href="#" class="text-white">
                  Organic Products
                </a>
              </p>
              <p>
                <a  style={{ textDecoration: 'none', color: 'white' }} href="#" class="text-white">
                  Non Organic Products
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Useful links
              </h5>
              <p>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/" class="text-white">
                  HOME
                </Link>
              </p>
              <p>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/donate" class="text-white">
                  Organic Products
                </Link>
              </p>
              <p>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/view" class="text-white">
                 Non-Organic Products
                </Link>
              </p>
              <p>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/profile" class="text-white">
                  PROFILE
                </Link>
              </p>
              <p>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/aboutus" class="text-white">
                  AboutUs
                </Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i>Khargar, Mumbai
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>ekrushiseva@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 7875020282
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 9978787877
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2020 All rights reserved by :
                <a style={{ textDecoration: 'none', color: 'white' }} href="/aboutus">
                  <strong  class="text-info">Team 05 CDAC MUMBAI</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;