import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  width: 60%;
  background: lightblue;
  padding: 30px;
  margin: 0 auto;
  & form {
    display: flex;
    flex-direction: column;
    line-spacing: 10px;
  }
  & label {
    margin: 10px;
  }
  & input {
    margin-bottom: 20px;
  }
  & select {
    margin: 10px;
  }
  & button {
    border: 1px solid #4f005f;
    background: #4f005f;
    color: white;
    margin-left: 100px;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
  & button:hover {
    background: black;
    border-color: #741188;
  }
`;

const AddTeamMember = (props) => {
  const [teamMember, setTeamMember] = useState({
    memberName: "",
    email: "",
    role: "",
  });
  const changeHandler = (event) => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  const AddTMHandler = (e) => {
    e.preventDefault();
    props.onSubmitForm(teamMember);
    setTeamMember({ memberName: "", email: "", role: "" });
  };
  return (
    <FormStyle>
      <form onSubmit={AddTMHandler}>
        <label htmlFor="memberName"> </label>
        Enter Your Name
        <input
          id="memberName"
          type="text"
          name="memberName"
          onChange={changeHandler}
          value={teamMember.memberName}
        />
        <label htmlFor="email"> </label>
        Enter Your email
        <input
          id="email"
          type="email"
          name="email"
          onChange={changeHandler}
          value={teamMember.email}
        />
        <div>
          <label htmlFor="role">Select Your Role</label>

          <select name="role" onChange={changeHandler} value={teamMember.role}>
            <option value="">--select your roll--</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Designer">Designer</option>
            <option value="Tester">Tester</option>
          </select>
          <button>Submit</button>
        </div>
      </form>
    </FormStyle>
  );
};
export default AddTeamMember;
