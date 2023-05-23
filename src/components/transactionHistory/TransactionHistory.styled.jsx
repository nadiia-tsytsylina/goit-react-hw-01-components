import styled from '@emotion/styled';

export const TransactionBox = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
`;
export const Thead = styled.thead`
  background-color: #00bcd5;
  color: #ffffff;
  font-size: 14px;
`;
export const HeadColumn = styled.th`
  border: 1px solid #f9f6f6f3;
`;
export const Row = styled.tr`
  color: #818f9e;
  border: 1px solid rgba(77, 147, 208, 0.2);

  &:nth-of-type(odd) {
    background-color: #ecf1f4;
  }

  &:nth-of-type(even) {
    background-color: #ffffff;
  }
`;
export const Column = styled.td`
  border: 1px solid rgba(77, 147, 208, 0.2);
`;
