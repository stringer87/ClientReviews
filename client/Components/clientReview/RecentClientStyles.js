import styled from 'styled-components';


export const Card = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  margin: 5px;
  justify-content: space-around;
  background-color: red;
`;

export const AvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  background-color: black;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  background-color: purple;
  margin: 10px;
`;

export const ClientInfoContainer = styled.div`
  width: 600px;
  height: 80px;
  margin: 10px;
  background-color: green;
`;

export const ClientInfoList = styled.ul`
  margin-top: 30px;
  margin-bottom: 35px;
  display: flex;
  justify-content: space-around;
  `;

export const InfoListEntry = styled.li`
  list-style-type: none;
  font-family: sans-serif;
`;
