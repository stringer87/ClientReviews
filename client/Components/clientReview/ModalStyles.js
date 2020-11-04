import styled from 'styled-components';

export const ModalWrapper = styled.div`
padding: 25px;
width: 500px;
max-width: 500px;
height: 450px;
max-height: 450px;
background-color: #f0ebd7;
top: 10%;
left: 31%;
border: solid #8EADB2 1px;
position: fixed;
`;

export const ModalTextInput = styled.textarea`
outline: none;
resize: none;
margin: 25px;
background: #E8EBEA;
width: 450px;
height: 150px;
font-size: 18px;
font-family: sans-serif;
`;

export const ModalClientContainer = styled.div`
display: flex;
flex-direction: rows;
justify-content: space-around;
`;

export const ModalClientDetails = styled.div`
text-align: center;
display: flex;
flex-direction: column;
border: solid #8EADB2 1px;
background: #E8EBEA;
width: 200px;
height: 200px;
`;

export const ModalAvatar = styled.div`
background: #8EADB2;
width: 200px;
height: 200px;
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

export const ButtonWrapper = styled.div`
text-align: right;
`;

export const ModalExit = styled.button`
padding: 5px, 6px;
border: none;
font-size: 15px;
margin-bottom: 15px;
`;

export const ModalSubmit = styled.button`
font-size: 15px;
padding: 5px, 6px;
border: none;
margin-bottom: 15px;
`;

export const RatingContainer = styled.div`
margin-top: 15px;
`;
export const Rating = styled.input`
margin-left: 6px;
margin-right: 6px;
`;
export const Numbers = styled.span`
font-size: 17px;
margin-left: 8px;
margin-right: 8px;
`;