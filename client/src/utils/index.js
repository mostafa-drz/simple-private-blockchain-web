import axios from "axios";
import React from "react";
import SearchBlock from "../components/SearchBlock";
import NewBlock from "../components/NewBlock";
export const fetchBlockCounts = () => {
  return axios.get("/api/block-height");
};

export const getBlockInfo = ({ height }) => {
  return axios.get(`/api/block/${height}`);
};

export const addNewBlock = ({ body }) => {
  return axios.post("/api/block", { data: body });
};
export const getResponseErrorMessage = error => {
  return error.response ? error.response.data.error.message || "Soemthing went wrong" : "Something wnet wrong";
};

export const renderCurrentView = ({ current }) => {
  switch (current) {
    case "info":
      return <SearchBlock />;
    case "new":
      return <NewBlock />;
    case "validate-block":
      return <p>validate a block</p>;
    case "validate-chain":
      return <p>validate the chain</p>;
    default:
      break;
  }
};
