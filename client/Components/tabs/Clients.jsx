import React, { useState, useContext, useEffect } from 'react';
import ClientCard from '../clientCard/ClientCard.jsx'
import ClientModal from '../clientCard/ClientModal.jsx'
import axios from 'axios';
const { MenuContext } = require('../stateContext.jsx');
const { SearchWrapper } = require('./ClientsStyles');
const { SearchBar } = require('./ClientsStyles');

function Clients() {
  const [menu, setMenu] = useContext(MenuContext);
  const [search, setSearch] = useState('');
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({});

  useEffect(() => {
    setSearch('')
    axios.get('/api/clients')
      .then(({ data }) => {
        setClients(data);
      })
      .catch((err) => console.log(err))
  }, [menu.clients])

  const handleClient = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (menu.activeClientModal === true) {
      setMenu((current) => ({ ...current, activeClientModal: false }));
    } else {
      axios.get('/api/client', { params: { id: id } })
        .then(({ data }) => {
          setClient(data[0]);
          setMenu((current) => ({ ...current, activeClientModal: true }));
        })
        .catch((err) => console.log(err))
    }
  }
  const handelModal = () => {
    setMenu((current) => ({ ...current, activeClientModal: false }))
  }
  return <>
    {
      menu.clients && <SearchWrapper>
        <SearchBar onChange={(e) => setSearch(e.target.value)} />
      </SearchWrapper>
    }
    {menu.clients && clients.map((client) => {
      if (search) {
        if (client.fullName.toLowerCase().includes(search.toLowerCase())) {
          return <ClientCard client={client} key={client._id} view={handleClient} />
        }
      } else {
        return <ClientCard client={client} key={client._id} view={handleClient} />
      }

    })}
    {
      menu.activeClientModal && <ClientModal client={client} exit={handelModal} />
    }
  </>
}

export default Clients;