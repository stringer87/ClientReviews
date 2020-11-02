import React from 'react';

const { ModalWrapper } = require('./ModalStyles');
const { ModalTextInput } = require('./ModalStyles');
const { ModalClientContainer } = require('./ModalStyles');
const { ModalClientDetails } = require('./ModalStyles');
const { ModalAvatar } = require('./ModalStyles');
const { Avatar } = require('./ModalStyles');


function RecentClientModal() {
  return <>
    <ModalWrapper>
      <ModalClientContainer>
        <ModalAvatar>
          <Avatar />
        </ModalAvatar>
        <ModalClientDetails></ModalClientDetails>
      </ModalClientContainer>
      <ModalTextInput></ModalTextInput>
    </ModalWrapper>
  </>
}

export default RecentClientModal;