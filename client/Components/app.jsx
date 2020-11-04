import React from 'react';
import axios from 'axios';
import RecentClientModal from './clientReview/RecentClientModal.jsx';
import RecentClient from './clientReview/RecentClient.jsx';
import Layout from './windowLayout/Layout.jsx'
import { MenuProvider } from './stateContext.jsx';

const { clients } = require('./sampleData')

function App() {
  return <>
    <MenuProvider>
      <Layout />
    </MenuProvider>
  </>
}

export default App
