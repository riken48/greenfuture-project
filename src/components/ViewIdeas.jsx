import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function ViewIdeas() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchIdeas = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4000/ideas");
  //       setIdeas(response.data);
  //     } catch (error) {
  //       console.error("Error fetching ideas:", error);
  //     }
  //   };
  
  //   fetchIdeas();
  // }, []);
  
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: "Idea 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in imperdiet justo. Sed enim augue, egestas eget tortor vel, euismod consectetur nibh.",
      votes: 2,
      tags: "Logistics",
      progress: "Pending",
    },
    {
      id: 2,
      title: "Idea 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in imperdiet justo. Sed enim augue, egestas eget tortor vel, euismod consectetur nibh.",
      votes: 7,
      tags: "Communication, AI",
      progress: "Waiting for Review",
    },
    {
      id: 3,
      title: "Idea 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in imperdiet justo. Sed enim augue, egestas eget tortor vel, euismod consectetur nibh.",
      votes: 10,
      tags: "Logistics, Communication, AI",
      progress: "Reviewed",
    },
    {
      id: 4,
      title: "Idea 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in imperdiet justo. Sed enim augue, egestas eget tortor vel, euismod consectetur nibh.",
      votes: 0,
      tags: "Logistics, Communication, AI",
      progress: "Approved",
    },
    {
      id: 5,
      title: "Idea 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in imperdiet justo. Sed enim augue, egestas eget tortor vel, euismod consectetur nibh.",
      votes: 3,
      tags: "AI",
      progress: "Rewarded",
    },
  ]);

  const [selectedIdea, setSelectedIdea] = useState(null);

  const handleReadMore = (idea) => {
    setSelectedIdea(idea);
  };

  // const handleVote = (id) => {
  //   alert(`You voted for Idea #${id}`);
  //   setIdeas(
  //     ideas.map((idea) =>
  //       idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea
  //     )
  //   );
  // };

  const handleVote = async (id) => {
    try {
      const response = await axios.post("http://localhost:4000/vote", { id });
      const updatedIdea = response.data.idea;
  
      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) =>
          idea.id === updatedIdea._id ? { ...idea, votes: updatedIdea.votes } : idea
        )
      );
  
      alert("Vote counted!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit your vote.");
    }
  };

  const handleCollaborate = () => {
    alert("Do you confirm?");
  };

  return (
    <div className="container mt-5">
      {/* Back Button */}
      <button
        className="btn btn-secondary position-absolute"
        style={{
          top: "80px",
          left: "20px",
          zIndex: "1",
        }}
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        Back
      </button>

      <h2 className="text-center mb-4 fw-bold">All Ideas</h2>

      <div className="row">
        {/* Map through ideas and display each idea in a card */}
        {ideas.map((idea) => (
          <div className="col-md-4 mb-4" key={idea.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{idea.title}</h5>
                <p className="card-text">{idea.description}</p>

                <p className="card-text">
                  <strong>Votes: </strong>
                  {idea.votes}
                </p>

                <p className="card-text"><strong>Progress:</strong> {idea.progress}</p>  

                <p className="card-text">Tags: {idea.tags}</p>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleReadMore(idea)}
                  >
                    Read More
                  </button>

                  <button
                    className="btn customBtn"
                    onClick={() => handleVote(idea.id)} // Handle vote increment
                  >
                    Vote
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying full idea details */}
      {selectedIdea && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {selectedIdea.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setSelectedIdea(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedIdea.description}</p>
              </div>
              <div className="modal-footer">
                {/* Collaborate button */}
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={handleCollaborate}
                >
                  Collaborate
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setSelectedIdea(null)} // Close modal
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewIdeas;
