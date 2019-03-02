import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Header, Visibility } from "semantic-ui-react";

const NavBarMenuComponent = props => {
  return (
    <Visibility
      onBottomPassed={props.setShadowMenu}
      onBottomVisible={props.unSetShadowMenu}
      once={false}
    >
      <div>
        <Menu borderless fixed="top" style={props.menuStyle}>
          <Menu.Item>
            <Icon loading name="life ring" />
          </Menu.Item>
          <Menu.Item
            onClick={props.handleItemClick}
            name="logo"
            as={Link}
            name="app"
            exact
            to="/app"
          >
            <Header>Travers</Header>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item />
            {props.children}
          </Menu.Menu>
        </Menu>
      </div>
    </Visibility>
  );
};

export default NavBarMenuComponent;
