import React, { Component } from "react";
import Success from "./Success";
import Error from "./Error";
import { getChainValidation, getResponseErrorMessage } from "../utils";
class ValidateTheChain extends Component {
  state = {
    valid: null,
    error: null
  };
  componentDidMount() {
    getChainValidation()
      .then(({ data: { invalids } }) => {
        this.setState({ valid: !invalids || invalids.length === 0 });
      })
      .catch(error => {
        this.this.setState({ error: getResponseErrorMessage(error) });
      });
  }
  render() {
    const { error, valid } = this.state;
    return (
      <div>
        {error && <Error message={error} />}
        {valid === true ? <Success message="The chain is valid!" /> : <Error message="The chain is not valid!" />}
      </div>
    );
  }
}

export default ValidateTheChain;
