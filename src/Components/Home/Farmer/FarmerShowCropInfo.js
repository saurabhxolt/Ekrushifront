import axios from "axios";
import React, { useEffect, useState } from "react";
import FarmernavBar from "./FarmerNavbar";
import Itemcard from "../Consumer/Itemcard";

import cardback from "./cardback.jpg";

export default function FarmerShowCropInfo() {
  let id = sessionStorage.getItem("id");
  let email = sessionStorage.getItem("email");
  const [pdata, setPdata] = useState([{}]);
  useEffect(async () => {
    let result1 = await axios.get(
      `http://localhost:8080/farmer/showFarmerCropInfo/${id}`
    );
    console.log(id);
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
                //column
                <div className="col-4 mb-2">
                  <Itemcard item={item} key={item.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
