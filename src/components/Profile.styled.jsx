import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  background-color: rgb(157, 220, 247);
  width: 300px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  outline: 1px solid rgba(0, 0, 0);
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const UserTag = styled.p`
  font-size: 14px;
  color: #777;
`;

export const UserLocation = styled.p`
  font-size: 14px;
  color: #555;
`;
export const UserStats = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
`;
export const UserStatsList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  padding: 10px;
  outline: 1px solid rgb(0, 0, 0);
  background-color: rgb(69, 118, 250);
`;
