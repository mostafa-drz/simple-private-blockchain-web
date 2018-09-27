import React, { Component } from "react";
import styled from "styled-components";
import { addNewBlock, getResponseErrorMessage } from "../utils";
import Error from "./Error";
import Success from "./Success";
import CountContext from "../CountContext";
class NewBlock extends Component {
  state = {
    body: "",
    succes: null,
    error: null
  };
  addNewBlockToChain = () => {
    const { body } = this.state;
    addNewBlock({ body })
      .then(() => {
        this.setState({ body: "", success: "Block Added successfully!" });
        this.props.increament();
      })
      .catch(error => {
        this.setState({ error: getResponseErrorMessage(error) });
      });
  };
  handleInputChange = e => {
    this.setState({ body: e.target.value, error: null, success: null });
  };
  render() {
    const { body, error, success } = this.state;
    return (
      <NewBlockContainer>
        <textarea
          value={body}
          onChange={this.handleInputChange}
          cols={60}
          rows={10}
          placeholder="Enter the data you want to add to the chain...."
        />
        {error && <Error message={error} />}
        {success && <Success message={success} />}
        <Button onClick={this.addNewBlockToChain}>Add</Button>
      </NewBlockContainer>
    );
  }
}

const NewBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 1% 3%;
  background: #01579b;
  border: 2px solid #01579b;
  align-self: center;
  width: 300px;
  margin-top: 10px;
  font-size: 1.4rem;
  color: #fff;
  transition: all 0.4s ease;
  &:hover {
    cursor: pointer;
    background-color: #81d4fa;
    transition: all 0.4s ease;
  }
`;
const TextArea = styled.textarea``;
export default props => (
  <CountContext.Consumer>{({ increament }) => <NewBlock {...props} increament={increament} />}</CountContext.Consumer>
);
