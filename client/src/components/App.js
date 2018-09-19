import React, { Component } from "react";
import BlockCounts from "./BlockCounts";
import Error from "./Error";
import styled from "styled-components";
import { fetchBlockCounts } from "../utils";
class App extends Component {
  state = {
    numberOfBlocks: 0,
    error: "This is wrong"
  };
  componentDidMount() {
    fetchBlockCounts()
      .then(({ data: { height } }) => {
        this.setState({ numberOfBlocks: height });
      })
      .catch(error => {
        this.setState({ error: "something went wrong when tried to get the block height" });
      });
  }
  render() {
    const { numberOfBlocks, error } = this.state;
    return (
      <AppContainer>
        {error && <Error message={error} />}
        <BlockCounts count={numberOfBlocks} />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  background-color: #90caf9;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export default App;
