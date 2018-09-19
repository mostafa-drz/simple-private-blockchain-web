import React from "react";
import styled from "styled-components";
const Error = ({ message }) => (
  <ErrorBox>
    <p>{message}!</p>
  </ErrorBox>
);

const ErrorBox = styled.div`
  color: #bf360c;
  width: 80vw;
  height: 50px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 600;
`;

export default Error;
