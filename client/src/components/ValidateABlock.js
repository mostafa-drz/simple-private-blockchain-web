import React, { Component } from "react";
import styled from "styled-components";
import { validateABlock, getResponseErrorMessage } from "../utils";
import Success from "./Success";
import Error from "./Error";
class ValidateABlock extends Component {
  state = {
    height: "",
    error: null,
    valid: null
  };

  handleInputChange = e => {
    this.setState({ height: e.target.value, error: null, valid: null });
  };
  validate = () => {
    const { height } = this.state;
    validateABlock({ height })
      .then(({ data: { valid } }) => {
        this.setState({ valid });
      })
      .catch(error => {
        this.setState({ error: getResponseErrorMessage(error) });
      });
  };
  render() {
    const { height, valid, error } = this.state;
    return (
      <div>
        <BlockValidationForm>
          <Input
            placeholder="Enter the block height for validation..."
            onChange={this.handleInputChange}
            value={height}
          />
          <Button onClick={this.validate}>Validate</Button>
        </BlockValidationForm>
        {error && <Error message={error} />}
        {valid === true && <Success message="The Block is valid!" />}
        {valid === false && <Error message="The Block is not valid!" />}
      </div>
    );
  }
}

const Input = styled.input`
  border: none;
  border-bottom: 3px solid #00796b;
  background: transparent;
  padding: 2% 3%;
  transition: all 0.4s ease;
  flex: 1;
  font-size: 1.2rem;
  &:focus {
    outline: none;
    border-bottom-color: #004d40;
    transition: all 0.4s ease;
  }
`;
const BlockValidationForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  max-width: 600px;
`;
const Button = styled.button`
  padding: 1% 3%;
  background: #01579b;
  border: 2px solid #01579b;
  align-self: center;
  width: 200px;
  margin-top: 10px;
  font-size: 1.4rem;
  margin-left: 3px;
  color: #fff;
  transition: all 0.4s ease;
  &:hover {
    cursor: pointer;
    background-color: #81d4fa;
    transition: all 0.4s ease;
  }
`;
export default ValidateABlock;
