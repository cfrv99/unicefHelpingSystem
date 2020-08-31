import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <Menu stackable>
        <Menu.Item>
          <img src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>

        
        <Menu.Item name="features">
        <NavLink to="/create">
        Yeni Elan Ver
        </NavLink>
        </Menu.Item>

        <Menu.Item name="testimonials">
          <NavLink to="/search">Yardim Axtar</NavLink>
        </Menu.Item>

        <Menu.Item name="sign-in">Sign-in</Menu.Item>
      </Menu>
    </div>
  );
};
