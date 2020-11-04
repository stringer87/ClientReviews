import React, { useState, useEffect, useContext } from 'react';
import RecentClient from '../clientReview/RecentClient.jsx';
import RecentClientModal from '../clientReview/RecentClientModal.jsx';
import axios from 'axios';

const { MenuContext } = require('../stateContext.jsx');

function RecentClientTab() {
  const [clients, setClients] = useState({})
  const [menu, setMenu] = useContext(MenuContext);
  const [client, setClient] = useState({})

  useEffect(() => {
    axios.get('/api/clients')
      .then(({ data }) => {
        setClients(data)
      })
      .catch((err) => console.log(err))
  }, [menu.recentClients])

  const handelReview = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    axios.get('/api/client', { params: { id: id } })
      .then(({ data }) => {
        setClient(data[0]);
        setMenu((current) => ({ ...current, modal: true }));
      })
      .catch((err) => console.log(err))
  }

  const handelModal = () => {
    setMenu((current) => ({ ...current, modal: false }))
  }

  return <>
    {menu.recentClients &&
      clients.map((client) => {
        return <RecentClient client={client} key={client._id} selection={handelReview} />
      })
    }
    {menu.modal && <RecentClientModal client={client} exit={handelModal} />}
  </>
}


export default RecentClientTab;