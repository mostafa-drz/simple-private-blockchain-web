import React, { Component } from "react";
import styled from "styled-components";
class NavBar extends Component {
  render() {
    const { current, onChangeView } = this.props;
    return (
      <NavBarContainer>
        <NavItem active={current === "info"} onClick={() => onChangeView({ view: "info" })}>
          Get Block Info
        </NavItem>
        <NavItem active={current === "new"} onClick={() => onChangeView({ view: "new" })}>
          + Add a new Block
        </NavItem>
        <NavItem active={current === "validate-block"} onClick={() => onChangeView({ view: "validate-block" })}>
          Validate a Block
        </NavItem>
        <NavItem active={current === "validate-chain"} onClick={() => onChangeView({ view: "validate-chain" })}>
          Validate the chain
        </NavItem>
      </NavBarContainer>
    );
  }
}

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 3%;
`;

const NavItem = styled.div`
  background: transparent;
  border: 2px solid #1a237e;
  padding: 2% 3%;
  background-color: ${props => (props.active ? "#e1f5fe" : "#42a5f5")};
  box-shadow: 1px 1px 1px #01579b;
  font-size: 1.2rem;
  width: 250px;
  transition: all 0.4s ease;
  &:not(:first-of-type) {
    margin-left: 1%;
  }
  &:hover {
    cursor: pointer;
    background-color: #e1f5fe;
    transition: all 0.4s ease;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 1px 1px 1px #ccc;
    transition: all 0.4s ease;
  }
`;
export default NavBar;
