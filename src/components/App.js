import React from 'react';

import userInfo from '../data/profileSocialNetwork/user.json';
import statData from '../data/statisticsSection/statistical-data.json';
import friendList from '../data/friendList/friends.json';
import transactions from '../data/transactions/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <Profile
      name={userInfo.name}
      tag={userInfo.tag}
      location={userInfo.location}
      avatar={userInfo.avatar}
      stats={userInfo.stats}
    />
    <Statistics title="Upload stats" stats={statData} />
    <FriendList freinds={friendList} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
