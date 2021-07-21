import logo from "./logo.svg";
import "./App.css";
import AddTeamMember from "./components/Team Members/AddTeamMembers";
import { useState } from "react";
import MemberList from "./components/MemeberList";

function App() {
  const [memberList, setMemberList] = useState([]);

  const formSubmitHandler = (enteredName, enteredEmail, selectedValue) => {
    setMemberList((prevMemberList) => {
      return [
        ...prevMemberList,
        {
          "Team Member Name": enteredName,
          "Team Member email": enteredEmail,
          "Team Member role": selectedValue,
        },
      ];
    });
  };
  return (
    <div>
      <h1> Team Meamber</h1>
      <AddTeamMember onSubmitForm={formSubmitHandler} />

      {memberList.map((member) => {
        return <MemberList member={member} />;
      })}
    </div>
  );
}

export default App;
