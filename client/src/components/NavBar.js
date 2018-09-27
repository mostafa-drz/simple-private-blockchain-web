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
  padding: 2% 3%;
  color: ${props => (props.active ? "#42a5f5" : "#1a237e")};
  font-size: 1.2rem;
  width: 250px;
  transition: all 0.4s ease;
  &:not(:first-of-type) {
    margin-left: 1%;
  }
  &:hover {
    cursor: pointer;
    color: #42a5f5;
  }
  &:active {
    transform: translateY(-3px);
    transition: all 0.4s ease;
  }
`;
export default NavBar;
