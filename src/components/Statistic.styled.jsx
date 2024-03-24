import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 300px;
  border: 1px solid rgb(221, 221, 221);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;
export const StatisticsItem = styled.li`
  display: grid;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  outline: 0.5px solid black;
`;
