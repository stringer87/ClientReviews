import React, { useState, useContext, useEffect as useEffect } from 'react';
import ClientCard from '../clientCard/ClientCard.jsx'
import axios from 'axios';

const { MenuContext } = require('../stateContext.jsx');
const { SearchWrapper } = require('./ClientsStyles');
const { SearchBar } = require('./ClientsStyles');

function Clients() {
  const [menu, setMenu] = useContext(MenuContext);
  const [search, setSearch] = useState('');
  const [clients, setClients] = useState([]);
  useEffect(() => {
    setSearch('')
    axios.get('/api/clients')
      .then(({ data }) => {
        setClients(data);
      })
      .catch((err) => console.log(err))
  }, [menu.clients])
  return <>
    {
      menu.clients && <SearchWrapper>
        <SearchBar onChange={(e) => setSearch(e.target.value)} />
      </SearchWrapper>
    }
    {menu.clients && clients.map((client) => {
      if (search) {
        if (client.fullName.toLowerCase().includes(search.toLowerCase())) {
          return <ClientCard client={client} key={client._id} />
        }
      } else {
        return <ClientCard client={client} key={client._id} />
      }

    })}
  </>
}

export default Clients;