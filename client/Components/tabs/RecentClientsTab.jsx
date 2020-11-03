import React, { useContext } from 'react';
import RecentClient from '../clientReview/RecentClient.jsx';
import RecentClientModal from '../clientReview/RecentClientModal.jsx';
const { MenuContext } = require('../stateContext.jsx');

function RecentClientTab({ clients }) {
  const [menu, setMenu] = useContext(MenuContext);
  const handelReview = (e) => {
    console.log(e.currentTarget.getAttribute('data-id'));
    //make call to database to get data for this event
  }
  return <>
    {menu.recentClients &&
      clients.map((client) => {
        return <RecentClient client={client} key={client._id} selection={handelReview} />
      })
    }
  </>
}


export default RecentClientTab;