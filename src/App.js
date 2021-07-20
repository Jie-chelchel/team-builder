import logo from "./logo.svg";
import "./App.css";
import AddTeamMember from "./components/Team Members/AddTeamMembers";
import { useState } from "react";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div>
      <h1> Team Meamber</h1>
      <AddTeamMember />
    </div>
  );
}

export default App;
