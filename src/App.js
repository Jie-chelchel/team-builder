import logo from "./logo.svg";
import "./App.css";
import AddTeamMember from "./components/Team Members/AddTeamMembers";
import { useState } from "react";
import MemberList from "./components/MemeberList";

const initialFormValues = {
  memberName: "",
  email: "",
  role: "",
};

function App() {
  const [memberList, setMemberList] = useState([]);

  const formSubmitHandler = (teamMember) => {
    setMemberList((prevMemberList) => {
      return [
        ...prevMemberList,
        {
          "Team Member Name": teamMember.memberName,
          "Team Member email": teamMember.email,
          "Team Member role": teamMember.role,
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
