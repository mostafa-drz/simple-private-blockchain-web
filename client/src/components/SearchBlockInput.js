import React, { Component } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
class SearchBlockInput extends Component {
  state = {
    value: "",
    error: null
  };
  onInputChange = debounce(value => {
    this.props.onClearFetchErrors();
    if (this.isInputValid({ value }) || value.length === 0) {
      this.setState({ value, error: null });
      value && value.length > 0 && this.props.onSearch({ height: value });
    } else {
      this.setState({ error: "Not a valid value", value });
      this.props.onClearResult();
    }
  }, 1);
  isInputValid = ({ value }) => {
    return !isNaN(value) && Number.isInteger(parseInt(value, 10));
  };

  render() {
    const { value, error } = this.state;
    return (
      <SearchBlockInputContainer>
        <Input
          onChange={e => this.onInputChange(e.target.value)}
          placeholder="Search by block height"
          value={value}
          hasError={error}
        />
        {error && <span style={{ color: "#dd2c00" }}>{error}</span>}
      </SearchBlockInputContainer>
    );
  }
}
const SearchBlockInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  min-width: 500px;
  border-bottom: 10px solid #424242;
  transition: all 0.3 ease;
  font-size: 1.8rem;
  &:focus {
    border-bottom-color: ${props => (props.hasError ? "#dd2c00" : "#212121")};
    color: ${props => (props.hasError ? "#dd2c00" : "#000 ")};
    transition: all 0.3 ease;
    outline: none;
  }
`;
export default SearchBlockInput;
