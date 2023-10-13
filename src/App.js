import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketManage from "./app/pages/TicketManage";
import SignIn from "./app/pages/SignIn";
import SignUp from "./app/pages/SignUp";
import TravelHistory from "./app/pages/TravelHistory";
import Train from "./app/pages/Train";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />{" "}
        <Route path="/travelhistory" element={<TravelHistory />} />
        <Route path="/ticketmanage" element={<TicketManage />} />
        <Route path="/train" element={<Train />} />
      </Routes>
    </Router>
  );
}

export default App;
