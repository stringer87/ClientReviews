import React, { useState } from 'react';

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
const { Rating } = require('./ModalStyles');
const { Numbers } = require('./ModalStyles');

function RecentClientModal({ client, exit, submit }) {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');
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
          <ClientInfo>rating: {client.rating}</ClientInfo>
          <RatingContainer>
            <Numbers>1</Numbers>
            <Numbers>2</Numbers>
            <Numbers>3</Numbers>
            <Numbers>4</Numbers>
            <Numbers>5</Numbers>
            <br />
            <Rating type={"radio"} name={"rating"} onChange={() => setRating(1)} />
            <Rating type={"radio"} name={"rating"} onChange={() => setRating(2)} />
            <Rating type={"radio"} name={"rating"} onChange={() => setRating(3)} />
            <Rating type={"radio"} name={"rating"} onChange={() => setRating(4)} />
            <Rating type={"radio"} name={"rating"} onChange={() => setRating(5)} />
          </RatingContainer>
        </ModalClientDetails>
      </ModalClientContainer>
      <ModalTextInput onChange={(e) => setReview(e.target.value)}></ModalTextInput>
      <ButtonWrapper>
        <ModalSubmit onClick={() => submit(review, rating)}>Submit</ModalSubmit>
      </ButtonWrapper>
    </ModalWrapper>
  </>
}

export default RecentClientModal;