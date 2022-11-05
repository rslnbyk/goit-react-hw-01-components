import {
  ProfileContainer,
  PersonalInfoContainer,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsName,
  StatsNumber,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <PersonalInfoContainer>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </PersonalInfoContainer>

      <StatsList>
        <StatsItem>
          <StatsName>Followers</StatsName>
          <StatsNumber>{stats.followers}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <StatsName>Views</StatsName>
          <StatsNumber>{stats.views}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <StatsName>Likes</StatsName>
          <StatsNumber>{stats.likes}</StatsNumber>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
