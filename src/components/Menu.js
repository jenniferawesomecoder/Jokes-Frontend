import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'

// functional stateless component
const Nav = () =>
  <Menu color="green" inverted stackable>
    <Link to="/" ><Menu.Item header>Jokes</Menu.Item></Link>
    <Link to="/groups" ><Menu.Item>Pick A Group</Menu.Item></Link>

    <Dropdown item>
      <Dropdown.Menu>
        <Dropdown.Item><Link to="/new" className="dropdownLink">Create A Group</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/all" className="dropdownLink">All Jokes</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/collections" className="dropdownLink">Collections</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>

export default Nav
