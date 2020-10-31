import React from 'react';

const ModalWrapper = require('./styles').ModalWrapper;
const ModalTextInput = require('./styles').ModalTextInput;
const ModalClientContainer = require('./styles').ModalClientContainer;
const ModalClientDetails = require('./styles').ModalClientDetails;
const ModalAvatar = require('./styles').ModalAvatar;
const Avatar = require('./styles').Avatar;


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