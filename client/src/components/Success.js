import React from "react";
import styled from "styled-components";
const Success = ({ message }) => <SuccessContainer>{message}</SuccessContainer>;

const SuccessContainer = styled.p`
  padding: 2% 3%;
  background-color: #69f0ae;
  border: 1px solid #66bb6a;
`;

export default Success;
