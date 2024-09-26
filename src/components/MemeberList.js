import React from "react";
import styled from "styled-components";

const MemberCardStyle = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  background: #96dee3;
  margin-top: 30px;
  padding: 10px 20px;
  & span {
    font-weight: bold;
  }
`;

const MemberList = (props) => {
  return (
    <MemberCardStyle>
      <p>
        <span>Team Member Name:</span> {props.member["Team Member Name"]}
      </p>
      <p>
        <span>Team Member Email:</span> {props.member["Team Member email"]}
      </p>
      <p>
        <span>Team Member Role:</span> {props.member["Team Member role"]}
      </p>
    </MemberCardStyle>
  );
};

export default MemberList;
