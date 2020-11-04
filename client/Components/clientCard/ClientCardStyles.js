import styled from 'styled-components';


export const Card = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  margin: 5px;
  justify-content: space-around;
  border: solid #8EADB2 1px;
  background-color: #f0ebd7;
`;

export const AvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  background-color: #8EADB2;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px;
`;

export const ClientInfoContainer = styled.div`
  width: 600px;
  height: 80px;
  margin: 10px;
  background-color: #E8EBEA;
`;

export const ClientInfoList = styled.ul`
  margin-top: 30px;
  margin-bottom: 35px;
  display: flex;
  justify-content: space-around;
  `;

export const InfoListEntry = styled.li`
  list-style-type: none;
  color: #8EADB2;
  font-family: sans-serif;
`;
