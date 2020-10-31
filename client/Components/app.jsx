import React from 'react';
import axios from 'axios';
import RecentClientModal from './RecentClientModal.jsx';


function App() {
  return <>
    {/* <ModalWrapper>
      <ModalClientContainer>
        <ModalAvatar>
          <Avatar />
        </ModalAvatar>
        <ModalClientDetails></ModalClientDetails>
      </ModalClientContainer>
      <ModalTextInput></ModalTextInput>
    </ModalWrapper>
  </> */}
    <RecentClientModal></RecentClientModal>
  </>
}

export default App
