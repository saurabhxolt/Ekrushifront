import blog1 from "./blog1.jpg";
import blog2 from "./blog2.jpg";
import blog3 from "./blog3.jpg";

export default function Cards() {
  return (
    <section
      class="portfolio"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      }}
    >
      <div class="container text-center ">
        <h1>LATEST NEWS </h1>
        <br />
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
              <img
                src={blog1}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
              <div class="card body ">
                <h4 ass="card-title">
                  Agri products export up by over 25% in first 10 months of FY
                  2021-22: Govt to LS
                </h4>
                <p class="card-text text-left">
                  India's export of agricultural products have touched USD 40.87
                  billion in the first 10 months of the current fiscal and it is
                  25.14 percent more than the financial year, Union Minister of
                  State for Commerce Patel said in Lok Sabha . Patel said
                  exports of some other major agricultural products like wheat,
                  sugar and cotton have registered a substantial increase during
                  the current year.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
              <img
                src={blog2}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
              <div class="card body">
                <h5 class="card-title">
                  Maharashtra launches it's own Agriculture Export Policy; seeks
                  consistency in centre's export policy to promote state's agri
                  exports
                </h5>
                <p class="card-text text-left">
                  The Government of Maharashtra launched the state's Agriculture
                  Export Policy (AEP) on Friday, which will focus on export
                  promotion of 21 agricultural commodities. The Government of
                  India had unveiled its Agriculture Export Policy in December
                  2018, directing the state governments to draft their own
                  policy. 
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
              <img
                src={blog3}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
              <div class="card body">
                <h4 class="cards-title">
                  Agri exports likely to cross $50 bn this fiscal: Commerce
                  Ministry
                </h4>
                <p class="card-text text-left">
                  The ministry has taken several steps during the ongoing
                  COVID-19 pandemic to push the exports. These measures include
                  an extension of validity of various certifications/
                  accreditations beyond their dates of expiry; setting up of
                  control rooms to resolve problems; issuance of online
                  certificates for exports; and facilitating opening up of more
                  testing laboratories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
