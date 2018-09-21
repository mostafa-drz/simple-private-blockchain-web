import React from "react";
import styled from "styled-components";
const BlockCounts = ({ count }) => (
  <BlockCountsBox>
    <span>Number of blocks: {count}</span>
  </BlockCountsBox>
);

const BlockCountsBox = styled.div`
  border: 1px solid #01579b;
  width: 200px;
  height: 50px;
  top: 5px;
  left: 5px;
  position: absolute;
  padding: 1% 1%;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1a237e;
  box-shadow: 1px 1px 1px 1px #0277bd;
`;
export default BlockCounts;
