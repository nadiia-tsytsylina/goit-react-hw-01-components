import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/friendList/FriendList';
import TransactionHistory from 'components/transactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
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
