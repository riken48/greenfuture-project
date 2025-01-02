import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function IdeaSubmissionForm() {
  const [formData, setFormData] = useState({
    ideaTitle: "",
    ideaDescription: "",
    ideaTag: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validateForm() {
    let formErrors = {};
    if (!formData.ideaTitle) formErrors.ideaTitle = "Idea title is required.";
    if (!formData.ideaDescription)
      formErrors.ideaDescription = "Idea description is required.";
    if (!formData.ideaTag) formErrors.ideaTag = "Idea tag is required."; // Validate idea tag
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("Submitted idea:", formData);
  //     setSuccessMessage("Idea submitted successfully!");
  //     setFormData({
  //       ideaTitle: "",
  //       ideaDescription: "",
  //       ideaTag: "", // Reset ideaTag after submission
  //     });
  //     setErrors({});
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:4000/ideasubmissionform", formData)
        .then((response) => {
          setSuccessMessage(response.data.message);
          setFormData({
            ideaTitle: "",
            ideaDescription: "",
            ideaTag: "",
          });
          setErrors({});
        })
        .catch((error) => {
          console.error(error);
          alert(error.response?.data?.error || "Idea submission failed!");
        });
    }
  }

  return (
    <div className="container mt-5">
      {/* Back Button */}
      <button
        className="btn btn-secondary position-absolute"
        style={{ top: "80px", left: "20px", zIndex: "1" }}
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <h2 className="text-center mb-4 fw-bold">Submit Your Idea</h2>
      {successMessage && (
        <div className="alert alert-success text-center">{successMessage}</div>
      )}
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Idea Title</label>
              <input
                type="text"
                className="form-control"
                name="ideaTitle"
                value={formData.ideaTitle}
                onChange={handleChange}
              />
              {errors.ideaTitle && (
                <div className="text-danger">{errors.ideaTitle}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Idea Description</label>
              <textarea
                className="form-control"
                name="ideaDescription"
                rows="5"
                value={formData.ideaDescription}
                onChange={handleChange}
              ></textarea>
              {errors.ideaDescription && (
                <div className="text-danger">{errors.ideaDescription}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Idea Tag</label>
              <input
                type="text"
                className="form-control"
                name="ideaTag"
                value={formData.ideaTag}
                onChange={handleChange}
              />
              {errors.ideaTag && (
                <div className="text-danger">{errors.ideaTag}</div>
              )}
            </div>
            <button type="submit" className="btn customBtn w-100">
              Submit Idea
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IdeaSubmissionForm;
