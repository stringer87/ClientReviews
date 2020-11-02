import React from 'react';

const { Card } = require('./RecentClientStyles');
const { AvatarContainer } = require('./RecentClientStyles');
const { Avatar } = require('./RecentClientStyles');
const { ClientInfoContainer } = require('./RecentClientStyles');
const { ClientInfoList } = require('./RecentClientStyles');
const { InfoListEntry } = require('./RecentClientStyles');

function RecentClient({ client }) {
  return <>
    <Card>
      <AvatarContainer>
        <Avatar src={`${client.avatar}`} />
      </AvatarContainer>
      <ClientInfoContainer>
        <ClientInfoList>
          <InfoListEntry>{`${client.firstName} ${client.lastName}`}</InfoListEntry>
          <InfoListEntry>Service Placeholder</InfoListEntry>
          <InfoListEntry>Date Placeholder</InfoListEntry>
        </ClientInfoList>
      </ClientInfoContainer>
    </Card>
  </>
}

export default RecentClient