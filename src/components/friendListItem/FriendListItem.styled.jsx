import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f9f6f6f3;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0px 8px 5px rgba(12, 4, 35, 0.1);
  width: 250px;
`;
export const Name = styled.p`
  font-size: 20px;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.isOnline) {
      return '#47b14a';
    }
    return '#fa554f';
  }};
`;
