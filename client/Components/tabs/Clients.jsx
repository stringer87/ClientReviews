import React, { useState, useContext } from 'react';
import ClientCard from '../clientCard/ClientCard.jsx'

const { MenuContext } = require('../stateContext.jsx');
const { SearchWrapper } = require('./ClientsStyles');
const { SearchBar } = require('./ClientsStyles');
const { Search } = require('./ClientsStyles');

function Clients({ clients }) {
  const [menu, setMenu] = useContext(MenuContext);
  const [search, setSearch] = useState('');
  return <>
    {
      menu.clients && <SearchWrapper>
        <SearchBar onChange={(e) => setSearch(e.target.value)} />
        <Search>🔍</Search>
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