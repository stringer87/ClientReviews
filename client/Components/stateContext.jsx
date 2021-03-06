import React, { useState, createContext } from 'react';

export const MenuContext = createContext();

export function MenuProvider(props) {
  const [menu, setMenu] = useState({
    clients: true,
    recentClients: false,
    contentDisplayed: 'clients',
    modal: false,
    activeClientModal: false,
  });
  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {props.children}
    </MenuContext.Provider>
  )

}
