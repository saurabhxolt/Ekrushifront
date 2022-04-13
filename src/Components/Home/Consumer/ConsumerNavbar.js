import { Button } from "bootstrap";
import { Link } from "react-router-dom";
export default function ConsumerNavbar() {
  const removeSession = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    window.location.href = "/";
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <Link
          to="/consumerHome"
          className="fs-"
          style={{ textDecoration: "none", color: "#DB4437" }}
        >
          E-KrushiSeva
        </Link>

        <b className="text-info ">Consumer</b>
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
                to="/consumerHome"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                Home{" "}
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link
                to="/consumerOrganicProduct"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                Organic Product
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link
                to="/consumerNonOrganicProduct"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                Non-Organic Product
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link
                to="/consumerCropInfo"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                Crop Info
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link
                to="/consumerOrder"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                Order
              </Link>
            </li>

            <li class="nav-item px-3">
              <Link
                to="/consumerProfile"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                Profile
              </Link>
            </li>

            <li class="nav-item px-3">
              <Link to="/" style={{ textDecoration: "none", color: "#0F9D58" }}>
                <button className="btn btn-primary " onClick={removeSession}>
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
