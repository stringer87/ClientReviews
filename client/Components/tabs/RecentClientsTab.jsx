import React, { useState, useEffect, useContext } from 'react';
import RecentClient from '../clientReview/RecentClient.jsx';
import RecentClientModal from '../clientReview/RecentClientModal.jsx';
import axios from 'axios';

const { MenuContext } = require('../stateContext.jsx');

function RecentClientTab() {
  const [clients, setClients] = useState({})
  const [menu, setMenu] = useContext(MenuContext);
  useEffect(() => {
    axios.get('/api/clients')
      .then(({ data }) => {
        setClients(data)
      })
      .catch((err) => console.log(err))
  })
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