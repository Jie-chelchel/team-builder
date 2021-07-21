import React, { useState } from "react";
import styled from "styled-components";
import FormValidation from "../UI/FormValidation";

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
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const AddTeamMember = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = FormValidation(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = FormValidation(isEmail);

  const {
    value: selectedValue,
    isValid: selectedRoleIsValid,
    hasError: RoleHasError,
    valueChangeHandler: roleChangeHandler,
    inputBlurHandler: roleInputBlurHandler,
    reset: roleReset,
  } = FormValidation(isNotEmpty);

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && selectedRoleIsValid) {
    formIsValid = true;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    props.onSubmitForm(enteredName, enteredEmail, selectedValue);
    console.log(enteredName);
    console.log(enteredEmail);
    console.log(selectedValue);
    nameReset();
    emailReset();
    roleReset();
  };

  return (
    <FormStyle>
      <form onSubmit={submitHandler}>
        {/* {!formIsValid && <p>please enter all required area</p>}{" "} */}
        <div>
          <label htmlFor="memberName"> </label>
          Enter Your Name
          <input
            id="memberName"
            type="text"
            onBlur={nameInputBlurHandler}
            onChange={nameChangeHandler}
            value={enteredName}
          />
          {nameHasError && <p>Name must not be empty</p>}
        </div>
        <div>
          <label htmlFor="email"> </label>
          Enter Your email
          <input
            id="email"
            type="email"
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          {emailHasError && <p>Please enter a valid email.</p>}
        </div>
        <div>
          <label htmlFor="role">Select Your Role</label>

          <select
            onChange={roleChangeHandler}
            value={selectedValue}
            onBlur={roleInputBlurHandler}
          >
            <option value="">--select your roll--</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Designer">Designer</option>
            <option value="Tester">Tester</option>
          </select>
          {RoleHasError && <p>Please select a role.</p>}
          <button>Submit</button>
        </div>
      </form>
    </FormStyle>
  );
};
export default AddTeamMember;
