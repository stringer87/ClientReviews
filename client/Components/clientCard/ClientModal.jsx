import React from 'react';

const { ModalWrapper } = require('./ClientModalStyles');
const { ModalClientContainer } = require('./ClientModalStyles');
const { ModalClientDetails } = require('./ClientModalStyles');
const { ModalAvatar } = require('./ClientModalStyles');
const { Avatar } = require('./ClientModalStyles');
const { ModalExit } = require('./ClientModalStyles');
const { ModalDelete } = require('./ClientModalStyles');
const { ButtonWrapper } = require('./ClientModalStyles');
const { ClientInfo } = require('./ClientModalStyles');
const { ClientInfoWrapper } = require('./ClientModalStyles');

function ClientModal({ client, exit }) {
  return <>
    <ModalWrapper>
      <ButtonWrapper>
        <ModalExit onClick={exit}>X</ModalExit>
      </ButtonWrapper>
      <ModalClientContainer>
        <ModalAvatar>
          <Avatar src={client.avatar} />
        </ModalAvatar>
        <ModalClientDetails>
          <ClientInfoWrapper>
            <ClientInfo>{client.firstName}</ClientInfo>
            <ClientInfo>{client.lastName}</ClientInfo>
            <ClientInfo>{client.email}</ClientInfo>
            <ClientInfo>{client.phone}</ClientInfo>
            <ClientInfo>rating: {client.rating}</ClientInfo>
          </ClientInfoWrapper>
        </ModalClientDetails>
      </ModalClientContainer>
    </ModalWrapper>
  </>
}


export default ClientModal;