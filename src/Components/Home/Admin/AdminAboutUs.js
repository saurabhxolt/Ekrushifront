import React, { useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import "../MemberImages/AboutUs.css";
import Footer from "../Footer";

import "../MemberImages/kuldip.jpeg";
import "../MemberImages/saurabh.jpeg";
import "../MemberImages/samarth.jpeg";
import "../MemberImages/suraj.jpeg";
import "../MemberImages/mayur.jpeg";

export default function AdminAboutUs() {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "ADMIN"
    ) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div>
      <AdminNavbar />
      <div class="container-fluid">
        <div class="row p-5">
          <div class="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../MemberImages/suraj.jpeg")}
                      alt="aneesh"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Suraj Salunkhe</h2>
                    <p>
                      Hi I'm Suraj Salunkhe. I'm currently pursuing Post
                      Gratuate Diploma in CDAC Khaghar, I am the Project Lead
                      and my role in the project is Full Stack developer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../MemberImages/samarth.jpeg")}
                      alt="chirag"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Samarth Patil</h2>
                    <p>
                      Hi I'm Samarth Patil. I'm currently pursuing Post Gratuate
                      Diploma in CDAC Khaghar, and my role in the project is
                      Full Stack developer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../MemberImages/saurabh.jpeg")}
                      alt="gajanan"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Saurabh Sonwal</h2>
                    <p>
                      Hi I'mSaurabh Sonwal. I'm currently pursuing Post Gratuate
                      Diploma in CDAC Khaghar, and my role in the project is
                      Frontend developer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../MemberImages/mayur.jpeg")}
                      alt="pratik"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Mayur Bharambhe</h2>
                    <p>
                      Hi I'm Mayur Bharambhe. I'm currently pursuing Post
                      Gratuate Diploma in CDAC Khaghar, and my role in the
                      project is frontend developer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src={require("../MemberImages/kuldip.jpeg")}
                      alt="sid"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Kuldeep Raut</h2>
                    <p>
                      Hi I'm Kuldeep Raut. I'm currently pursuing Diploma in
                      CDAC Khaghar, and my role in the project is frontend
                      developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
