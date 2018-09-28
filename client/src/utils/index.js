import axios from "axios";
import React from "react";
import SearchBlock from "../components/SearchBlock";
import NewBlock from "../components/NewBlock";
import ValidateABlock from "../components/ValidateABlock";
import ValidateTheChain from "../components/ValidateTheChain";
export const fetchBlockCounts = () => {
  return axios.get("/block-height");
};

export const getBlockInfo = ({
  height
}) => {
  return axios.get(`/block/${height}`);
};

export const addNewBlock = ({
  body
}) => {
  return axios.post("/block", {
    body
  });
};
export const validateABlock = ({
  height
}) => {
  return axios.get(`/validate-a-block/${height}`);
};

export const getChainValidation = () => {
  return axios.get("/validate-the-chain");
};
export const getResponseErrorMessage = error => {
  return error.response ? error.response.data.error.message || "Soemthing went wrong" : "Something wnet wrong";
};

export const renderCurrentView = ({
  current
}) => {
  switch (current) {
    case "info":
      return <SearchBlock / > ;
    case "new":
      return <NewBlock / > ;
    case "validate-block":
      return <ValidateABlock / > ;
    case "validate-chain":
      return <ValidateTheChain / > ;
    default:
      break;
  }
};