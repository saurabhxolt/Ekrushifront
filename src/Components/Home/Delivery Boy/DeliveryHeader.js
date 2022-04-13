import { Button } from "bootstrap";
import { Link } from "react-router-dom";
export default function DeliveryHeader() {
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

        <b className="text-info ml-3 ">Delivery</b>
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
                to="/deliveryhome"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                Home{" "}
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link
                to="/deliveryProductInfo"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                ProductInfo
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link
                to="/deliveryCropInfo"
                style={{ textDecoration: "none", color: "#0F9D58" }}
              >
                Crop Info
              </Link>
            </li>

            <li class="nav-item px-3">
              <Link
                to="/deliveryProfile"
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
