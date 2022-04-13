import { Button } from "bootstrap";
import { Link } from "react-router-dom";
export default function AdminNavbar() {
  const removeSession = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    window.location.href = "/";
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <Link
          to="/"
          className="fs-4"
          style={{ textDecoration: "none", color: "#DB4437" }}
        >
          E-KrushiSeva
        </Link>

        <b className="text-info">Admin </b>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item px-3">
              <Link
                to="/adminhome"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                Home{" "}
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link
                to="/userdetails"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                UserDetails
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link
                to="/addDeliveryBoy"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                DeliveryBoy
              </Link>
            </li>
            <Link
              to="/adminAboutus"
              style={{ textDecoration: "none", color: "#0F9D58" }}
            >
              About Us
            </Link>

            <Link to="/" style={{ textDecoration: "none", color: "#0F9D58" }}>
              <button className="btn btn-primary " onClick={removeSession}>
                {" "}
                Logout
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
