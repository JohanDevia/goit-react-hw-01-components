import Profile from './Profile.jsx';
import user from '../json/user.json';
import Statistics from './Statistics.jsx';
import data from '../json/data.json';
import FriendList from './FriendList.jsx';
import friends from '../json/friends.json';
import TransactionHistory from './TransactionHistory.jsx';
import transactions from '../json/transactions.json';
function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ;
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}
export default App;
