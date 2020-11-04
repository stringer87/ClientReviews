import React, { useContext } from 'react';
const { MenuContext } = require('../stateContext.jsx');

const { MenuButton } = require('./MenuStyles');
const { MenuWrapper } = require('./MenuStyles');


function Menu() {
  const [menu, setMenu] = useContext(MenuContext);

  const updateLayout = (e) => {
    let name = e.target.name;
    let previous = menu.contentDisplayed;
    if (name !== previous) {
      setMenu((current) => ({ ...current, [name]: true, [previous]: false, contentDisplayed: name, modal: false, activeClientModal: false }))
    }
  }
  return <>
    <MenuWrapper>
      <MenuButton name={'clients'} onClick={updateLayout}>Clients</MenuButton>
      <MenuButton name={'recentClients'} onClick={updateLayout}> Recent Clients</MenuButton>
    </MenuWrapper >
  </>
}

export default Menu;