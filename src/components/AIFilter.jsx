import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function AIFilter({ ideas, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredIdeas = ideas.filter((idea) =>
      idea.text.toLowerCase().includes(term)
    );

    onFilter(filteredIdeas);
  };

  return (
    <div className="container mt-5 position-relative">
      {/* Back Button */}
      <button
        className="btn btn-secondary position-absolute"
        style={{ top: "20px", left: "20px", zIndex: "1" }}
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        Back
      </button>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">
                AI-Powered Filter & Categorisation
              </h2>
              <div className="mb-3">
                <label htmlFor="searchInput" className="form-label">
                  Search Ideas
                </label>
                <input
                  type="text"
                  id="searchInput"
                  className="form-control"
                  placeholder="Type to filter ideas..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIFilter;
