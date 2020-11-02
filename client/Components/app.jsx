import React from 'react';
import axios from 'axios';
import RecentClientModal from './clientReview/RecentClientModal.jsx';
import RecentClient from './clientReview/RecentClient.jsx';
import Layout from './windowLayout/Layout.jsx'

const { clients } = require('./sampleData')

function App() {
  return <>
    <Layout />
    {/* {clients.map((client) => {
      return <RecentClient client={client} key={client._id} />
    })} */}
    {/* <RecentClientModal /> */}
  </>
}

export default App
