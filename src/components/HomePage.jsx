import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import greenFutureImage from "../assets/greenfuture.png";
import "../style/global.css";

function HomePage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold">
            Welcome to GreenFuture's Innovation Management System
          </h1>
          <p className="lead">Where ideas meet innovation!</p>
          <hr />
          <p>Please Register or Login to begin.</p>
          <div className="d-flex">
            <Link to="/registerloginpage" className="btn btn-lg me-2 customBtn">
              Register
            </Link>
            <Link to="/registerloginpage" className="btn btn-lg customBtn">
              Login
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={greenFutureImage}
            alt="GreenFuture"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
