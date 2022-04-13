import axios from "axios";
import React, { useEffect, useState } from "react";
import FarmernavBar from "./FarmerNavbar";
import Itemcard from "./Itemcard";

import cardback from "./cardback.jpg";

export default function FarmerShowProduct() {
  let id = sessionStorage.getItem("id");
  const [pdata, setPdata] = useState([{}]);

  useEffect(async () => {
    let result1 = await axios.get(
      `http://localhost:8080/farmer/showFarmerProduct/${id}`
    );
    console.log(result1.data);
    let pro = result1.data;

    setPdata(pro);
  }, []);

  return (
    <>
      <FarmernavBar />

      <h1 className="text-center text-info m-3">All Organic Products</h1>

      <div className="row">
        <div className="block col-8  m-2">
          <div className="row">
            {pdata.map((item) => {
              return (
                <div className="col-4 mb-2">
                  <Itemcard item={item} key={item.cropId} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
