function VotingSystem({ ideas, onVote }) {
  return (
    <div className="mt-4">
      <h3>Vote for Ideas</h3>
      {ideas.length === 0 ? (
        <p className="text-muted">No ideas available for voting.</p>
      ) : (
        ideas.map((idea, index) => (
          <div key={index} className="card mb-2">
            <div className="card-body">
              <p className="card-text">{idea.text}</p>
              <div className="d-flex">
                <button
                  className="btn btn-success me-2"
                  onClick={() => onVote(index, 1)}
                >
                  Upvote
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onVote(index, -1)}
                >
                  Downvote
                </button>
                <span className="ms-3">Votes: {idea.votes}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default VotingSystem;
