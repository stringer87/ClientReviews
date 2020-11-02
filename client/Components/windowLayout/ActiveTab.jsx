import React, { useContext } from 'react';
import RecentClientsTab from '../tabs/RecentClientsTab.jsx'
import Clients from '../tabs/Clients.jsx'

const { MenuContext } = require('../stateContext.jsx');
const { RecentClientWrapper } = require('./LayoutStyles');




const { clients } = require('../sampleData')

function ActiveTab() {
  const [menu, setMenu] = useContext(MenuContext);

  return <>
    <RecentClientWrapper>
      <RecentClientsTab clients={clients} />
      <Clients clients={clients} />
    </RecentClientWrapper>
  </>
}

export default ActiveTab;