import React, { Fragment, useState, useEffect } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
import cropinfo from "./cropinfo.jpg";
import swal from "sweetalert2";

const FarmerAddImage = () => {
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "FARMER"
    ) {
      window.location.href = "/login";
    }
  }, []);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  let productId = sessionStorage.getItem("productId");
  let email = sessionStorage.getItem("email");
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      let imgid = localStorage.getItem("uploadImgBookId");
      let v1 = "samarth@gmail.com";
      let v2 = 8;
      const res = await axios.post(
        `http://localhost:8080/upload/${email}/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          },
        }
      );

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");

      //swal("SUCCESS : Product added Succesfully.. :) ");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
    swal.fire({
      icon: "Success",
      title: "Hurreh!!!",
      text: " Product added Succesfully.. :)",
      timer: 5000,
      showConfirmButton: false,
    });

    window.location.href = "./addfarmproducts";
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url(" + cropinfo + ")",
        backgroundSize: "cover",
        height: "100vh",
        opacity: 1,
      }}
    >
      <div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <div className="text-center p-3">
              <h1>
                <b>Farmer-Product-Image</b>
              </h1>
            </div>

            <Fragment>
              {message ? <Message msg={message} /> : null}
              <form onSubmit={onSubmit}>
                <div className="custom-file mb-4">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={onChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    {filename}
                  </label>
                </div>

                <Progress percentage={uploadPercentage} />

                <input
                  type="submit"
                  value="Upload"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
              {uploadedFile ? (
                <div className="row mt-5">
                  <div className="col-md-6 m-auto">
                    <h3 className="text-center">{uploadedFile.fileName}</h3>
                    <img
                      style={{ width: "100%" }}
                      src={uploadedFile.filePath}
                      alt=""
                    />
                  </div>
                </div>
              ) : null}
            </Fragment>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerAddImage;
