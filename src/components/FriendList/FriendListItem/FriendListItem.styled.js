import styled from 'styled-components';

export const FriendStatus = styled.span`
  background-color: ${props => (props.status === 'green' ? 'green' : 'red')};
  width: 14px;
  height: 14px;
  border-radius: 7px;
  margin-right: 10px;
`;

export const FriendItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  width: 200px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendName = styled.p`
  margin-left: 10px;
`;
