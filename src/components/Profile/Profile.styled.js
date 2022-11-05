import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 270px;
  margin-left: 50px;
  margin-bottom: 50px;
  text-align: center;
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const PersonalInfoContainer = styled.div`
  padding: 30px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
`;

export const Name = styled.p`
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  color: gray;
`;

export const Location = styled.p`
  font-size: 15px;
  color: gray;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  background-color: rgba(212, 212, 212, 0.2);
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid rgba(212, 212, 212, 0.8);
  border-bottom: 0;
  flex-basis: calc(100% / 3);

  :last-child {
    border-radius: 0 0 7px 0;
    border-left: 0;
    border-right: 0;
  }

  :first-child {
    border-radius: 0 0 0 7px;
    border-right: 0;
    border-left: 0;
  }
`;

export const StatsName = styled.span`
  display: inline-block;
  font-size: 13px;
  margin-bottom: 7px;
  color: gray;
`;

export const StatsNumber = styled.span`
  display: block;
  font-weight: 700;
  font-size: 15px;
`;
