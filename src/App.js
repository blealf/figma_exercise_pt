import './App.scss';
import Header from './components/Header';
import Card from './components/Card';
import Activity from './components/Activity';
import UserNav from './components/UserNav';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <UserNav />
      <Activity />
    </div>
  );
}

export default App;
