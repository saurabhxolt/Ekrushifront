import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Home/LogFiles/Register";
import Login from "./Components/Home/LogFiles/Login";
import AboutUs from "./Components/Home/MemberImages/AboutUs";
import ImpLinks from "./Components/Home/ImpLinks";
import Product from "./Components/Home/Product/Product";

import AdminHome from "./Components/Home/Admin/AdminHome";
import { UserDetails } from "./Components/Home/Admin/UserDetails";
import AddDeliveryBoy from "./Components/Home/Admin/AddDeliveyBoy";
import ConsumerHome from "./Components/Home/Consumer/ConsumerHome";
import DeliveryHome from "./Components/Home/Delivery Boy/DeliveryHome";
import FarmerHome from "./Components/Home/Farmer/FarmerHome";
import AdminAboutUs from "./Components/Home/Admin/AdminAboutUs";
import ConsumerCropInfo from "./Components/Home/Consumer/ConsumerCropInfo";
import ConsumerOrder from "./Components/Home/Consumer/ConsumerOrder";
import ConsumerViewProduct from "./Components/Home/Consumer/ConsumerViewProduct";
import ConsumerProfile from "./Components/Home/Consumer/ConsumerProfile";
import FarmerAddProduct from "./Components/Home/Farmer/FarmerAddImage";
import AddFarmProducts from "./Components/Home/Farmer/AddFarmProducts";
import AddCropInfo from "./Components/Home/Farmer/AddCropInfo";
import FarmerAddImage from "./Components/Home/Farmer/FarmerAddImage";
import AddCropimage from "./Components/Home/Farmer/AddCropimage";
import OrganicProduct from "./Components/Home/Product/OrganiProduct";
import NonOrganicProduct from "./Components/Home/Product/NonOrganicProduct";
import ConsumerOrganicProduct from "./Components/Home/Consumer/ConsumerOrganicProduct";
import ConsumerNonOrganicProduct from "./Components/Home/Consumer/ConsumerNonOrganicProduct";
import FarmerProfile from "./Components/Home/Farmer/FarmerProfile";
import DeliveryProductInfo from "./Components/Home/Delivery Boy/DeliveryProductInfo";
import DeliveryCropInfo from "./Components/Home/Delivery Boy/DeliveryCropInfo";
import DeliveryProfile from "./Components/Home/Delivery Boy/DeliveryProfile";
import EmailVerify from "./Components/Home/LogFiles/EmailVerify";
import OtpVerify from "./Components/Home/LogFiles/OtpVerify";
import PasswordChange from "./Components/Home/LogFiles/PasswordChange";
import FarmerShowProduct from "./Components/Home/Farmer/FarmerShowProduct";
import FarmerShowCropInfo from "./Components/Home/Farmer/FarmerShowCropInfo";
import DeliveryOtpVerify from "./Components/Home/Delivery Boy/DeliveryOtpVerify";
import CropInfo from "./Components/Home/CropInfo";
export default function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/implinks" element={<ImpLinks></ImpLinks>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/adminAboutus" element={<AdminAboutUs />}></Route>
        <Route path="/userdetails" element={<UserDetails />}></Route>
        <Route path="/addDeliveryBoy" element={<AddDeliveryBoy />}></Route>
        <Route path="/organicProduct" element={<OrganicProduct />}></Route>
        <Route path="/emailVerify" element={<EmailVerify />}></Route>
        <Route path="/otpVerify" element={<OtpVerify />}></Route>
        <Route path="/passwordChange" element={<PasswordChange />}></Route>
        <Route
          path="/nonOrganicProduct"
          element={<NonOrganicProduct />}
        ></Route>
        <Route path="/deliveryhome" element={<DeliveryHome />}></Route>
        <Route path="/farmerhome" element={<FarmerHome />}></Route>

        <Route path="/consumerCropInfo" element={<ConsumerCropInfo />}></Route>
        <Route path="/consumerHome" element={<ConsumerHome />}></Route>
        <Route path="/consumerOrder" element={<ConsumerOrder />}></Route>
        <Route path="/consumerProfile" element={<ConsumerProfile />}></Route>
        <Route
          path="/consumerViewProduct"
          element={<ConsumerViewProduct />}
        ></Route>
        <Route
          path="/consumerOrganicProduct"
          element={<ConsumerOrganicProduct />}
        ></Route>
        <Route
          path="/consumerNonOrganicProduct"
          element={<ConsumerNonOrganicProduct />}
        ></Route>
        <Route path="/farmerAddImage" element={<FarmerAddImage />}></Route>
        <Route path="/farmerhome" element={<FarmerHome />}></Route>
        <Route path="/farmerProfile" element={<FarmerProfile />}></Route>
        <Route
          path="/farmerShowProduct"
          element={<FarmerShowProduct />}
        ></Route>
        <Route
          path="/farmerShowCropInfo"
          element={<FarmerShowCropInfo />}
        ></Route>
        <Route
          path="/addfarmproducts"
          element={<AddFarmProducts></AddFarmProducts>}
        ></Route>
        <Route path="/addCropImage" element={<AddCropimage />}></Route>
        <Route path="/addCropInfo" element={<AddCropInfo />}></Route>
        <Route
          path="/deliveryProductInfo"
          element={<DeliveryProductInfo />}
        ></Route>
        <Route
          path="/deliveryOtpverify"
          element={<DeliveryOtpVerify />}
        ></Route>
        <Route path="/cropInfo" element={<CropInfo />}></Route>
        <Route path="/deliveryCropInfo" element={<DeliveryCropInfo />}></Route>
        <Route path="/deliveryProfile" element={<DeliveryProfile />}></Route>
      </Routes>

      {/* </BrowserRouter> */}
    </>
  );
}
