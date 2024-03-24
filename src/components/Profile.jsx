import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileContainer,
  AvatarImage,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsList,
} from './Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileContainer className="profile">
      <div className="description">
        <AvatarImage src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <UserTag className="tag">@{tag}</UserTag>
        <UserLocation className="location">{location}</UserLocation>
      </div>

      <UserStats className="stats">
        <UserStatsList>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </UserStatsList>
        <UserStatsList>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </UserStatsList>
        <UserStatsList>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </UserStatsList>
      </UserStats>
    </ProfileContainer>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
