import styled from 'styled-components';

export const FriendsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
export const FriendItem = styled.li`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1.5px;
  padding: 5px;
  background-color: skyblue;
  outline: 0.25px solid black;
`;

export const ParagraphfItem = styled.p`
  margin: 0;
`;
export const StatusItem = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;

  &.online {
    background-color: green;
  }

  &.offline {
    background-color: red;
  }
`;
