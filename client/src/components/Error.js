import React from "react";
import styled from "styled-components";
const Error = ({ message }) => (
  <ErrorBox>
    <p>{message}</p>
  </ErrorBox>
);

const ErrorBox = styled.div`
  padding: 2% 3%;
  background-color: #e57373;
  margin-top: 1%;
  width: 100%;
`;

export default Error;
