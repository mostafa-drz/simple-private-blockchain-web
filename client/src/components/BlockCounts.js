import React from "react";
import styled from "styled-components";
const BlockCounts = ({ count }) => (
  <BlockCountsBox>
    <span>Number of blocks: {count}</span>
  </BlockCountsBox>
);

const BlockCountsBox = styled.div`
  background-color: #01579b;
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
  color: #fff;
  box-shadow: 1px 1px 1px 1px #0277bd;
`;
export default BlockCounts;
