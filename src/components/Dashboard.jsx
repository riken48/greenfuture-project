import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
