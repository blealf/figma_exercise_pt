import './App.scss';
import Header from './components/Header';
import Card from './components/Card';
import Activity from './components/Activity';
import UserNav from './components/UserNav';
import './styles/Card.scss';
import './styles/CardLarge.scss';


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
