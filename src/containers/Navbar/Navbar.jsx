// React
import React from "react";

// node modules
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";

// components
import { RowContainer } from "../components/Containers";
import { Image } from "../components/Images";
import NAV_INFO from "./NavInfo";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    let navlinks = NAV_INFO.map(item => {
      return (
        <NLink
          key={item.text}
          to={item.to}
          target={item.openBlank && "blank"}
          activeClassName={activeClassName}
        >
          {item.text}
        </NLink>
      );
    });

    return (
      <div id="navbar-container">
        <HeaderContainer>
          <HeaderLink to="/">
            <Logo
              src="../images/logo-white.png"
              alt="personal logo"
              height="40px"
              width="44px"
            />
          </HeaderLink>
          <SmallScreenContainer>
            <Menu
              styles={menuStyles}
              isOpen={this.state.isMenuOpen}
              onStateChange={() => this.toggleMenu}
              width={200}
              right
            >
              <MenuLinkContainer>{navlinks}</MenuLinkContainer>
            </Menu>
          </SmallScreenContainer>
          <RegScreenContainer>
            <LinkContainer>{navlinks}</LinkContainer>
          </RegScreenContainer>
        </HeaderContainer>
      </div>
    );
  }
}

const HeaderContainer = RowContainer.extend`
  background-color: #333;
  justify-content: space-between;
  padding: 0.625rem 0;
  width: 100%;
`;

const HeaderLink = styled(Link)`
  padding: 0 0.625rem;
  text-decoration: none;
`;

const Logo = Image.extend`
  border: none;
`;

const activeClassName = "nav-item-active";
const NLink = styled(NavLink).attrs({
  activeClassName
})`
  color: #fff;
  margin: 0.625rem;
  padding: 0.325rem;
  text-decoration: none;
  &:hover {
    color: #2980b9;
  }
  &.${activeClassName} {
    border-bottom: 2px solid #2980b9;
  }
`;

const LinkContainer = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  padding: 0 0.625rem;
`;

const MenuLinkContainer = LinkContainer.extend`
  display: flex !important;
  flex-direction: column;
  align-items: center;
`;

const RegScreenContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

const SmallScreenContainer = styled.div`
  @media (min-width: 601px) {
    display: none;
  }
`;

const menuStyles = {
  bmBurgerButton: {
    position: "absolute",
    width: "1.5rem",
    height: "1.5rem",
    right: "36px",
    top: "20px"
  },
  bmBurgerBars: {
    background: "#FFF"
  },
  bmCrossButton: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    height: "1.5rem",
    width: "1.5rem"
  },
  bmCross: {
    background: "#FFF"
  },
  bmMenu: {
    background: "#333",
    display: "flex",
    padding: "2.5rem 1.5rem 0",
    fontSize: "1.15rem"
  },
  bmOverlay: {
    background: "none"
  }
};
