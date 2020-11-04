import styled from 'styled-components';

export const ModalWrapper = styled.div`
padding: 25px;
width: 500px;
max-width: 500px;
height: 320;
max-height: 320;
background-color: #f0ebd7;
top: 10%;
left: 31%;
border: solid #8EADB2 1px;
position: fixed;
`;
export const ModalClientContainer = styled.div`
display: flex;
flex-direction: rows;
justify-content: space-around;
`;
export const ButtonWrapper = styled.div`
text-align: right;
`;
export const ModalClientDetails = styled.div`
text-align: center;
display: flex;
flex-direction: column;
background: #E8EBEA;
width: 200px;
height: 200px;
max-height: 200px;
`;
export const ModalAvatar = styled.div`
background: #8EADB2;
width: 200px;
height: 200px;
`;
export const ClientInfoWrapper = styled.div`
padding:30px;
border: solid #8EADB2 1px;
text-align: center;
word-wrap: break-word;
display: flex;
flex-direction: column;
background: #E8EBEA;
`;
export const ClientInfo = styled.span`
  margin: 5px;
  font-size: 18px;
  font-family: sans-serif;
`;

export const Avatar = styled.img`
width: 180px;
height: 180px;
margin: 10px;
`;
export const ModalExit = styled.button`
padding: 5px, 6px;
border: none;
font-size: 15px;
margin-bottom: 15px;
`;

export const ModalDelete = styled.button`
font-size: 15px;
padding: 5px, 6px;
border: none;
margin-bottom: 15px;
`;
