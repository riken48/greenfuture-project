import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import RegisterLoginPage from "./components/RegisterLoginPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import IdeaSubmissionForm from "./components/IdeaSubmission.jsx";
import ViewIdeas from "./components/ViewIdeas.jsx";
import VotingSystem from "./components/VotingSystem.jsx";
import InnovationManagerDashboard from "./components/InnovationManagerDashboard.jsx";
import AIFilter from "./components/AIFilter";
import ManagerViewIdeas from "./components/ManagerViewIdeas.jsx";
import EvaluateIdeas from "./components/EvaluateIdeas.jsx";
import ManageRewards from "./components/ManageRewards.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route
          path="/registerloginpage"
          element={<RegisterLoginPage />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/ideasubmissionform"
          element={<IdeaSubmissionForm />}
        ></Route>
        <Route path="/viewideas" element={<ViewIdeas />}></Route>
        <Route path="/votingsystem" element={<VotingSystem />}></Route>
        <Route
          path="/innovationmanagerdashboard"
          element={<InnovationManagerDashboard />}
        ></Route>
        <Route path="/aifilter" element={<AIFilter />}></Route>
        <Route path="/managerviewideas" element={<ManagerViewIdeas />}></Route>
        <Route path="/evaluateideas" element={<EvaluateIdeas />}></Route>
        <Route path="/managerewards" element={<ManageRewards />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
