import React from 'react';

const { Card } = require('./ClientCardStyles');
const { AvatarContainer } = require('./ClientCardStyles');
const { Avatar } = require('./ClientCardStyles');
const { ClientInfoContainer } = require('./ClientCardStyles');
const { ClientInfoList } = require('./ClientCardStyles');
const { InfoListEntry } = require('./ClientCardStyles');

function RecentClient({ client, view }) {
  return <>
    <Card data-id={client._id} onClick={view}>
      <AvatarContainer>
        <Avatar src={`${client.avatar}`} />
      </AvatarContainer>
      <ClientInfoContainer>
        <ClientInfoList>
          <InfoListEntry>{`${client.firstName}`}</InfoListEntry>
          <InfoListEntry>{`${client.lastName}`}</InfoListEntry>
          <InfoListEntry>{`${client.email}`}</InfoListEntry>
        </ClientInfoList>
      </ClientInfoContainer>
    </Card>
  </>
}

export default RecentClient