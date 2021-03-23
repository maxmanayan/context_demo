import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

//old way first, without useContext hook
import {AccountConsumer} from '../providers/AccountProvider'

const NavBar = () => (
  <AccountConsumer>
    {
      (value) => (
        <Menu>
          <NavLink to="/">
            <Menu.Item>
              Home
            </Menu.Item>
          </NavLink>
          <NavLink to="/account/profile">
            <Menu.Item>
              {/* Will be replaced with the actual username */}
              {value.username}
            </Menu.Item>
          </NavLink>
        </Menu> 

      )
    }
  </AccountConsumer>
)

export default NavBar;


{/* <AccountConsumer>
  {
    (value)=> {
      <div>
        jsx here
        {value.whateverkeysareonit}
      </div>
    }
  }
</AccountConsumer> */}