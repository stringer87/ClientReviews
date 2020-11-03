import React from 'react';

const { Card } = require('./ClientCardStyles');
const { AvatarContainer } = require('./ClientCardStyles');
const { Avatar } = require('./ClientCardStyles');
const { ClientInfoContainer } = require('./ClientCardStyles');
const { ClientInfoList } = require('./ClientCardStyles');
const { InfoListEntry } = require('./ClientCardStyles');

function RecentClient({ client }) {
  return <>
    <Card>
      <AvatarContainer>
        <Avatar src={`${client.avatar}`} />
      </AvatarContainer>
      <ClientInfoContainer>
        <ClientInfoList>
          <InfoListEntry>{`${client.fullName}`}</InfoListEntry>
          <InfoListEntry>More Info Placeholder</InfoListEntry>
          <InfoListEntry>Last Seen Placeholder</InfoListEntry>
        </ClientInfoList>
      </ClientInfoContainer>
    </Card>
  </>
}

export default RecentClient