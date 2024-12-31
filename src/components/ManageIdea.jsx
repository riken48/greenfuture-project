function App() {
  const [ideas, setIdeas] = React.useState([]);

  const handleIdeaSubmit = (idea) => {
    setIdeas([...ideas, idea]);
  };

  return (
    <div>
      <h1>IMS-Connect</h1>
      <IdeaSubmissionForm onSubmit={handleIdeaSubmit} />
      <IdeaList ideas={ideas} />
    </div>
  );
}

export default App;
