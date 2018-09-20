import React, { Component } from "react";
import BlockCounts from "./BlockCounts";
import Error from "./Error";
import styled from "styled-components";
import { fetchBlockCounts, renderCurrentView } from "../utils";
import NavBar from "./NavBar";
class App extends Component {
  state = {
    numberOfBlocks: 0,
    error: null,
    view: "info"
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
  changeView = ({ view }) => {
    this.setState({ view });
  };
  render() {
    const { numberOfBlocks, error, view } = this.state;
    return (
      <AppContainer>
        {error && <Error message={error} />}
        <BlockCounts count={numberOfBlocks} />
        <NavBar onChangeView={this.changeView} current={view} />
        {renderCurrentView({ current: view })}
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
  align-items: center;
`;
export default App;
