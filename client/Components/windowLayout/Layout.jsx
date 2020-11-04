import React from 'react';
import Menu from './Menu.jsx';
import ActiveTab from './ActiveTab.jsx';

const { LayoutWrapper } = require('./LayoutStyles');
function Layout() {
  return <>
    <LayoutWrapper>
      <Menu />
      <ActiveTab />
    </LayoutWrapper>
  </>
}

export default Layout;