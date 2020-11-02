import styled from 'styled-components';

export const ModalWrapper = styled.div`
padding: 25px;
width: 500px;
max-width: 500px;
height: 400px;
max-height: 400px;
background-color: red;
`;

export const ModalTextInput = styled.textarea`
outline: none;
resize: none;
margin: 25px;
background: blue;
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
background: green;
width: 200px;
height: 200px;
`;

export const ModalAvatar = styled.div`
background: purple;
width: 200px;
height: 200px;
`;

export const Avatar = styled.img`
background: pink;
width: 180px;
height: 180px;
margin: 10px
`;