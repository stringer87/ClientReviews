import React, { useContext } from 'react';
import RecentClient from '../clientReview/RecentClient.jsx'
const { MenuContext } = require('../stateContext.jsx');

function RecentClientTab({ clients }) {
  const [menu, setMenu] = useContext(MenuContext);

  return <>
    {menu.recentClients &&
      clients.map((client) => {
        return <RecentClient client={client} key={client._id} />
      })
    }
  </>
}


export default RecentClientTab;