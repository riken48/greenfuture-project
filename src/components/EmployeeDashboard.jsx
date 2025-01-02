import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/registerloginpage"); // Redirect to login page
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            IMS-Connect
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mt-5">
        <h1 className="text-center mb-4">Employee Dashboard</h1>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card text-center shadow fixed-card-height">
              <div className="card-body">
                <h5 className="card-title">Submit Idea</h5>
                <p className="card-text">Submit your idea.</p>
                <Link to="/ideasubmissionform" className="btn customBtn">
                  Submit Idea
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card text-center shadow fixed-card-height">
              <div className="card-body">
                <h5 className="card-title">View Idea</h5>
                <p className="card-text">Checkout the ideas.</p>
                <Link to="/viewideas" className="btn customBtn">
                  View Ideas
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card text-center shadow fixed-card-height">
              <div className="card-body">
                <h5 className="card-title">Vote on Ideas</h5>
                <p className="card-text">Promote good ideas.</p>
                <Link to="/votingsystem" className="btn customBtn">
                  Give Your Vote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
