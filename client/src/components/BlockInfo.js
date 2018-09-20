import React from "react";
import styled from "styled-components";
const BlockInfo = ({ block }) => (
  <InfoContainer>{Object.keys(block).map(obj => Info({ title: obj, value: block[obj] }))}</InfoContainer>
);

const Info = ({ title, value }) => (
  <InfoRow>
    <InfoTitle>{title}</InfoTitle>
    <InfoValue>{value}</InfoValue>
  </InfoRow>
);

const InfoTitle = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
  padding: 1% 2%;
  display: inline-block;
  word-break: break-all;
  width: 150px;
  display: flex;
  align-items: center;
`;

const InfoValue = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  padding: 1% 2%;
  display: inline-block;
  max-width: 700px;
  word-break: break-all;
  flex: 1;
`;

const InfoRow = styled.div`
  display: flex;
  width: 100%;
  padding-left: 1%;
  border: 2px solid #fff;
  &:nth-child(2n + 1) {
    background-color: #ccc;
  }
  &:nth-child(2n) {
    background-color: #fff;
  }
`;

const InfoContainer = styled.div`
  margin-top: 3%;
`;
export default BlockInfo;
