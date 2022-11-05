import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-left: 50px;
  width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const TransactionTableHeader = styled.tr`
  background-color: #24c5ff;
  color: white;
  height: 35px;
  text-transform: uppercase;
  font-size: 12px;
`;

export const TransactionTableHeaderCell = styled.th`
  width: 200px;
`;

export const TransactionInfo = styled.tr`
  height: 35px;
  font-size: 12px;
  text-transform: capitalize;
  text-align: center;

  :nth-child(2n) {
    background-color: #dfdfdf;
  }
`;
