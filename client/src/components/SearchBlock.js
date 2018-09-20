import React, { Component } from "react";
import SearchBlockInput from "./SearchBlockInput";
import styled from "styled-components";
import { getBlockInfo, getResponseErrorMessage } from "../utils";
import BlockInfo from "./BlockInfo";
import { debounce } from "lodash";
import Error from "./Error";
class SearchBlock extends Component {
  state = {
    all: [],
    result: null,
    error: null
  };
  searchBlock = debounce(({ height }) => {
    getBlockInfo({ height })
      .then(({ data }) => {
        this.setState({ result: data });
      })
      .catch(error => {
        this.setState({ error: getResponseErrorMessage(error) });
      });
  }, 1000);

  clearFetchErrors = () => {
    this.setState({ error: null });
  };
  clearResult = () => {
    this.setState({ result: null });
  };
  render() {
    const { result, error } = this.state;
    return (
      <SearchBlockBox>
        <SearchBlockInput
          onSearch={this.searchBlock}
          onClearFetchErrors={this.clearFetchErrors}
          onClearResult={this.clearResult}
        />
        {result && <BlockInfo block={result} />}
        {error && <Error message={error} />}
      </SearchBlockBox>
    );
  }
}

const SearchBlockBox = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3% 5%;
`;
export default SearchBlock;
