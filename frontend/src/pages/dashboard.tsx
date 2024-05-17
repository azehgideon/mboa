import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import LandingPage from "./landingpage";

const Home = () => {
  return <p>Home</p>;
};
const Clients = () => {
  return <p>Clients</p>;
};
const Requests = () => {
  return <p>Requests</p>;
};
const Teams = () => {
  return <p>Teams</p>;
};
const Settings = () => {
  return <p>Settings</p>;
};

const Dashboard = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clients" element={<Clients />} />
          <Route path="requests" element={<Requests />} />
          <Route path="teams" element={<Teams />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default Dashboard;
