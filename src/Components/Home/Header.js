import Register from "./LogFiles/Register";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand px-4 text-info" href="/">
          <b>E-KrushiSeva</b>
        </a>
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
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="/organicProduct">
                Organic Products
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="nonOrganicProduct">
                Non Organic Products
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="cropInfo">
                Crop Info
              </a>
            </li>
            <li class="nav-item px-3 ">
              <a class="nav-link" href="implinks">
                ImpLinks
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="aboutus">
                About Us
              </a>
            </li>
            <li class="nav-item  px-5">
              <a class="nav-link" href="login">
                SignIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
