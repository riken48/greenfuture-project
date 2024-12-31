import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../style/Global.css";

function InnovationManagerDashboard() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Innovation Manager Dashboard</h1>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3 mb-4">
          <div className="card text-center shadow h-100">
            <div className="card-body">
              <h5 className="card-title">View Idea</h5>
              <p className="card-text">Checkout the ideas.</p>
              <Link to="/managerviewideas" className="btn customBtn">
                View Ideas
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 mb-4">
          <div className="card text-center shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Evaluate Idea</h5>
              <p className="card-text">Evaluate the ideas.</p>
              <Link to="/evaluateideas" className="btn customBtn">
                Evaluate Ideas
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 mb-4">
          <div className="card text-center shadow h-100">
            <div className="card-body">
              <h5 className="card-title">Manage Rewards</h5>
              <p className="card-text">Manage rewards for the ideas.</p>
              <Link to="/managerewards" className="btn customBtn">
                Manage Rewards
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 mb-4">
          <div className="card text-center shadow h-100">
            <div className="card-body">
              <h5 className="card-title">
                Manage AI Tagging and Categorisation
              </h5>
              <p className="card-text">
                Categorise and tag with the help of AI.
              </p>
              <Link to="/aifilter" className="btn customBtn">
                Manage Tagging
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnovationManagerDashboard;
