import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';
import Profile from 'components/Profile/Profile.js';
import Statistics from 'components/Statistics/Statistics.js';
import FriendList from 'components/FriendList/FriendList.js';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory.js';

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title={'Upload Stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
