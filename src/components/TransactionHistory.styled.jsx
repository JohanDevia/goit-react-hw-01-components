import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  tr:nth-child(even) {
    background-color: rgb(205, 235, 245);
  }
`;
export const Th = styled.th`
  background-color: #aee4f7;
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;
export const Td = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;
