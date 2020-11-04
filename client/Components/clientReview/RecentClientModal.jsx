import React from 'react';

const { ModalWrapper } = require('./ModalStyles');
const { ModalTextInput } = require('./ModalStyles');
const { ModalClientContainer } = require('./ModalStyles');
const { ModalClientDetails } = require('./ModalStyles');
const { ModalAvatar } = require('./ModalStyles');
const { Avatar } = require('./ModalStyles');
const { ModalExit } = require('./ModalStyles');
const { ModalSubmit } = require('./ModalStyles');
const { ButtonWrapper } = require('./ModalStyles');
const { ClientInfo } = require('./ModalStyles');
const { RatingContainer } = require('./ModalStyles');

function RecentClientModal({ client, exit }) {
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
          <ClientInfo>{client.fullName}</ClientInfo>
          <ClientInfo>{client.phone}</ClientInfo>
          <ClientInfo>{client.email}</ClientInfo>
          <ClientInfo>{client.rating}</ClientInfo>
          <RatingContainer>
            <input type={"radio"} name={"rating"} />
            <input type={"radio"} name={"rating"} />
            <input type={"radio"} name={"rating"} />
            <input type={"radio"} name={"rating"} />
            <input type={"radio"} name={"rating"} />
          </RatingContainer>
        </ModalClientDetails>
      </ModalClientContainer>
      <ModalTextInput></ModalTextInput>
      <ButtonWrapper>
        <ModalSubmit>Submit</ModalSubmit>
      </ButtonWrapper>
    </ModalWrapper>
  </>
}

export default RecentClientModal;