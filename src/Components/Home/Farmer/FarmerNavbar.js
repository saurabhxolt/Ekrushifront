export default function FarmernavBar() {
  const removeSession = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    window.location.href = "/";
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand px-4 text-info" href="/consumerhome">
          <b>E-KrushiSeva </b>
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
              <a class="nav-link active" aria-current="page" href="farmerhome">
                Home
              </a>
            </li>
            <li class="nav-item px-3">
              <a
                class="nav-link active"
                aria-current="page"
                href="addfarmproducts"
              >
                AddFarmProducts
              </a>
            </li>
            <li class="nav-item px-3">
              <a
                class="nav-link active"
                aria-current="page"
                href="farmerShowProduct"
              >
                ShowProducts
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link active" aria-current="page" href="addCropInfo">
                AddCropInfo
              </a>
            </li>

            <li class="nav-item px-3">
              <a
                class="nav-link active"
                aria-current="page"
                href="farmerShowCropInfo"
              >
                ShowCropInfo
              </a>
            </li>

            <li class="nav-item px-3">
              <a class="nav-link" href="aboutus">
                About Us
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="farmerProfile">
                Profile
              </a>
            </li>

            <li class="nav-item px-5">
              <button className="btn btn-primary " onClick={removeSession}>
                Logout
              </button>
            </li>
          </ul>
          <b className="text-info">Farmer</b>
        </div>
      </div>
    </nav>
  );
}
