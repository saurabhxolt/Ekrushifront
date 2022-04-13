import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import swal from "sweetalert2";

import "./register.css";
import { Link } from "react-router-dom";

//import authService from "../../api/auth.service";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");

  const registerUser = (data) => {
    axios.post(`http://localhost:8080/user/register`, data).then(
      (response) => {
        clearFields();
        swal
          .fire({
            icon: "Success",
            title: "Hurreh!!!",
            text: "You have Registered Succesfully",
            timer: 7000,
            showConfirmButton: true,
          })
          .then(function () {
            window.location.href = "./login";
          });
      },
      (error) => {
        console.log(error);

        alert(
          " ERROR : Failed to Register or Email Already Registered with us!!!"
        );
      }
    );
  };

  let user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: PhoneNo,
    city: City,
    state: State,
    password: password,
    role: role,
  };

  // let [ename, setEname] = useState();
  // let [eemail, setEemail] = useState();
  // let [ephone, setEphone] = useState();
  // let [epassword, setEpassword] = useState();
  // let [econpassword, setEconpassword] = useState();
  // let [etnc, setEtnc] = useState();
  // let [ecity, setEcity] = useState();
  // let [ebalance, setEbalance] = useState();
  // let [etype, setEtype] = useState();

  // function clearErrors() {
  //   document.getElementById("name").classList.remove("is-invalid");
  //   setEname("");

  //   document.getElementById("phone").classList.remove("is-invalid");
  //   setEphone("");

  //   document.getElementById("email").classList.remove("is-invalid");
  //   setEemail("");

  //   document.getElementById("password").classList.remove("is-invalid");
  //   setEpassword("");

  //   document.getElementById("conpassword").classList.remove("is-invalid");
  //   setEconpassword("");

  //   document.getElementById("tnc").classList.remove("is-invalid");
  //   setEtnc("");
  //   document.getElementById("phone").classList.remove("is-invalid");
  //   setEcity("");
  //   document.getElementById("city").classList.remove("is-invalid");
  //   setEbalance("");
  //   document.getElementById("type").classList.remove("is-invalid");
  //   setEtype("");
  // }

  function clearFields() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNo("");
    setCity("");
    setState("");
    setPassword("");
    setRole("");
  }

  function clearErrors() {
    document.getElementById("firstname").classList.remove("is-invalid");
    // setFirstName("");
    document.getElementById("lastname").classList.remove("is-invalid");
    // setLastName("");
  }

  let validate = () => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      PhoneNo.trim() === "" ||
      City.trim() === "" ||
      State.trim === "" ||
      password.trim() === ""
    ) {
      swal.fire("All fields are  required");
    } else if (
      firstName.search(/^[a-zA-Z ]*$/) < 0 ||
      firstName.length < 2 ||
      firstName.length > 20
    ) {
      document.getElementById("firstname").classList.add("is-invalid");
      swal.fire(
        "First Name must have length of minimum 2 and maximum 20 Characters"
      );
    } else if (
      lastName.search(/^[a-zA-Z ]*$/) < 0 ||
      lastName.length < 2 ||
      lastName.length > 20
    ) {
      document.getElementById("lastname").classList.add("is-invalid");
      swal.fire(
        "Last Name must have length of minimum 2 and maximum 20 Characters"
      );
    } else if (
      email === "" ||
      email.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("Email").classList.add("is-invalid");
      setEmail("Enter valid Email ID");
    } else if (PhoneNo === "" || PhoneNo.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("PhoneNo").classList.add("is-invalid");
      swal.fire(
        "Enter valid Mobile Number of 10 digit and Remember Should Start with '7'or'8'or'9'"
      );
    } else if (City === "") {
      document.getElementById("City").classList.add("is-invalid");
      setCity("Enter City");
    } else if (State === "") {
      document.getElementById("State").classList.add("is-invalid");
      setState("Enter State");
    } else if (
      password === "" ||
      password.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      password.length < 6
    ) {
      document.getElementById("Password").classList.add("is-invalid");
      swal.fire(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } else registerUser(user);
  };

  return (
    <>
      <Header></Header>
      <div className="vh-100 d-flex reg ">
        <div className="m-auto w-50 pt-2 ps-5 pe-5 pb-2  align-self-center text-white reg-form">
          <h1 className="text-center fw-bold mb-3" style={{ color: "#ba8b00" }}>
            E-KrushiSeva
          </h1>
          <h1 className="text-center display-5">Register</h1>

          <Form className="row g-3 mt-1">
            <div className="col-md-6">
              <label for="name" className="form-label fs-5">
                First Name
              </label>
              <Input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="Enter First Name "
                name="firstname"
                id="firstname"
                onFocus={clearErrors}
                value={firstName}
                required
              />
            </div>
            <div className="col-md-6">
              <label for="name" className="form-label fs-5">
                Last Name
              </label>
              <Input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Enter Last Name"
                name="lastname"
                id="lastname"
                onFocus={clearErrors}
                value={lastName}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-5">
                Email
              </label>
              <Input
                className="form-control"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Email"
                name="Email"
                id="Email"
                //onFocus={clearErrors}
                value={email}
                title="example:abc@gmail.com"
                required
                style={{ heigh: 200 }}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-5">
                Phone No
              </label>
              <Input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                placeholder="Enter Phone No"
                name="PhoneNo"
                id="PhoneNo"
                //onFocus={clearErrors}
                value={PhoneNo}
                title="8896523015"
                required
                style={{ heigh: 200 }}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-5">
                City
              </label>
              <Input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                placeholder="Enter Your City"
                name="City"
                id="City"
                maxLength="20"
                title="mumbai"
                required
                style={{ heigh: 200 }}
                //onFocus={clearErrors}
                value={City}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-5">
                State
              </label>
              <Input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                placeholder="Enter Your State"
                name="State"
                id="State"
                maxLength="20"
                title="Maharashtra"
                required
                style={{ heigh: 200 }}
                //onFocus={clearErrors}
                value={State}
              />
            </div>
            <div className="col-md-6">
              <label for="name" className="form-label fs-5">
                Password
              </label>
              <Input
                className="form-control"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password"
                name="Password"
                id="Password"
                //onFocus={clearErrors}
                value={password}
                required
                style={{ heigh: 200 }}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-5">
                Select Role
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                required
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="" selected>
                  Please select one of them
                </option>
                <option value="CONSUMER">CONSUMER</option>
                <option value="FARMER">FARMER</option>
              </select>
            </div>

            <Container className="text-center my-3">
              <Button color="success " outline onClick={validate}>
                Register
              </Button>
              <Button type="reset" color="warning ml-3 " outline>
                Clear
              </Button>
            </Container>
            <div className="col-md-12 text-center">
              <h4 className="fs-6">
                Already Registered?=
                <Link to="/login" href="#" className="text-decoration-none">
                  Login here
                </Link>
              </h4>
            </div>
          </Form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
